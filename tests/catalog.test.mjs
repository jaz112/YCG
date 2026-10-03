import test from 'node:test';
import assert from 'node:assert/strict';
import { resources, organizations, organizationFor } from '../src/data/resources.ts';
import { categories, journeys, provinces } from '../src/data/catalog.ts';
import { matchesResource } from '../src/lib/search.ts';

const empty = {query:'',category:'',province:'',city:'',type:''};
function find(filters) { return resources.filter(resource=>{const org=organizationFor(resource);return matchesResource(resource,{...empty,...filters},org.name,org.type);}); }

test('directory references are unique and complete',()=>{
  assert.equal(new Set(resources.map(resource=>resource.id)).size,resources.length);
  assert.equal(new Set(organizations.map(org=>org.id)).size,organizations.length);
  for(const resource of resources){
    assert.ok(organizationFor(resource));
    assert.equal(new URL(resource.source.url).protocol,'https:');
    assert.ok(resource.service.categories.every(id=>categories.some(category=>category.id===id)));
    assert.ok(resource.location.provinces.every(province=>provinces.includes(province)));
    assert.ok(resource.service.eligibility.summary);
    if(resource.source.review.method==='source-page-check') assert.match(resource.source.review.checkedAt,/^\d{4}-\d{2}-\d{2}$/);
    else assert.equal(resource.source.review.checkedAt,null);
  }
  for(const journey of journeys)assert.ok(journey.categories.every(id=>categories.some(category=>category.id===id)));
});
test('conversational queries retain their useful meaning',()=>{
  const cases=[['Where can I get help finding a job?','job-bank'],['How do I open a bank account?','banking'],['Where can I learn English?','language-classes'],['How do I find settlement services near me?','newcomer-services']];
  for(const [query,id] of cases) assert.ok(find({query}).some(resource=>resource.id===id),query);
});
test('source type and conflicting filters cannot leak unrelated listings',()=>{
  assert.ok(find({type:'public-agency'}).every(resource=>organizationFor(resource).type==='public-agency'));
  assert.equal(find({type:'public-agency',province:'Quebec'}).length,0);
});
test('Quebec excludes the IRCC finder and Ontario-only services',()=>{
  const ids=find({province:'Quebec'}).map(resource=>resource.id);
  assert.ok(ids.includes('quebec-support'));
  assert.ok(ids.includes('sin'));
  assert.ok(!ids.includes('newcomer-services'));
  assert.ok(!ids.includes('ohip'));
});
test('topic and location combine, with national information retained',()=>{
  const results=find({province:'Ontario',category:'health'});
  assert.ok(results.some(resource=>resource.id==='ohip'));
  assert.ok(results.some(resource=>resource.id==='healthcare'));
  assert.ok(results.every(resource=>resource.service.categories.includes('health')));
});
test('search handles simple newcomer questions and empty results',()=>{
  assert.ok(find({query:'How do I get OHIP?'}).some(resource=>resource.id==='ohip'));
  assert.ok(find({query:'What is a SIN?'}).some(resource=>resource.id==='sin'));
  assert.equal(find({query:'unlisted-xyz-service'}).length,0);
});
test('city filtering excludes unmatched local listings',()=>{
  const ids=find({province:'Ontario',city:'Ottawa'}).map(resource=>resource.id);
  assert.ok(!ids.includes('library'));
  assert.ok(!ids.includes('ymca'));
  assert.ok(ids.includes('sin'));
});


test('needs and audiences use OR within a group and intersect with location',()=>{
  const selected=find({needs:['housing','pregnancy'],audiences:['young-parent','young-mom'],province:'Ontario',city:'Toronto'}).map(r=>r.id);
  assert.ok(selected.includes('jessies'));
  assert.ok(selected.includes('abiona-live-in'));
  assert.ok(!selected.includes('earlyon'));
  const distant=find({needs:['pregnancy'],audiences:['young-parent'],province:'British Columbia',city:'Vancouver'});
  assert.equal(distant.length,0);
  assert.equal(find({needs:['not-a-real-tag']}).length,0);
});
