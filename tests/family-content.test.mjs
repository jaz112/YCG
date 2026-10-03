import test from 'node:test';
import assert from 'node:assert/strict';
import { resources } from '../src/data/resources.ts';
import { familyTopics, familyPathways } from '../src/data/family-content.ts';
import { needs, audiences } from '../src/data/discovery.ts';

test('family pathways resolve to usable, geographically labelled resources',()=>{
  assert.equal(familyTopics.length,24);
  const ids=new Set(resources.map(resource=>resource.id));
  for(const topic of familyTopics){
    assert.ok(topic.explanation&&topic.next&&topic.ask);
    assert.ok(topic.resources.every(id=>ids.has(id)),topic.id);
  }
  for(const path of familyPathways)for(const group of path.groups)assert.ok(group.ids.every(id=>ids.has(id)),path.id);
  for(const resource of resources){
    assert.ok(resource.service.needs?.every(id=>needs.some(need=>need.id===id)),resource.id);
    assert.ok(resource.service.audiences?.every(id=>audiences.some(audience=>audience.id===id)),resource.id);
    for(const source of resource.supportingSources??[])assert.equal(new URL(source.url).protocol,'https:');
  }
});

test('sensitive program distinctions remain explicit',()=>{
  const get=id=>resources.find(resource=>resource.id===id);
  assert.match(get('tph-hbhc').service.eligibility.summary,/OHIP is not required/);
  assert.match(get('tph-nfp').service.eligibility.summary,/discrepancy/);
  assert.match(get('ysm-nursery').service.ageCriteria,/conditional|participants/);
  assert.ok(!get('ysm-nursery').service.audiences.includes('newcomer'));
  assert.ok(!get('indigenous-earlyon').service.audiences.includes('newcomer'));
  assert.notEqual(get('abiona-live-in').service.ageCriteria,get('abiona-programs').service.ageCriteria);
});
