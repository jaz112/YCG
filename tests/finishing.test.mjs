import test from 'node:test';
import assert from 'node:assert/strict';
import {resources,organizationFor} from '../src/data/resources.ts';
import {categories,journeys} from '../src/data/catalog.ts';
import {topicPlans} from '../src/data/topic-plans.ts';
import {journeyFilters} from '../src/data/journey-filters.ts';
import {needs,audiences} from '../src/data/discovery.ts';
import {matchesResource} from '../src/lib/search.ts';
const empty={query:'',category:'',province:'',city:'',type:''};
test('every topic has a small, complete set of purposeful starting points',()=>{
 for(const category of categories){const plans=topicPlans[category.id];assert.ok(plans?.length);assert.ok(plans.length<=3);for(const plan of plans){assert.ok(plan.resourceIds.length<=3);for(const id of plan.resourceIds)assert.ok(resources.some(r=>r.id===id),id);}}
});
test('all discovery tags exist and every journey produces relevant results',()=>{
 for(const r of resources){for(const id of r.service.needs??[])assert.ok(needs.some(n=>n.id===id),id);for(const id of r.service.audiences??[])assert.ok(audiences.some(a=>a.id===id),id);}
 for(const j of journeys){assert.ok(journeyFilters[j.id]);const p=new URLSearchParams(journeyFilters[j.id]);const f={...empty,category:p.get('category')??'',needs:p.getAll('need'),audiences:p.getAll('audience')};assert.ok(resources.some(r=>{const o=organizationFor(r);return matchesResource(r,f,o.name,o.type)}),j.id);}
});
test('everyday questions and national support work outside Ontario',()=>{
 for(const [query,id] of [["I'm looking for a bus",'transport'],['Help with taxes','tax-clinics'],['Phone plans','wireless']]){const r=resources.find(r=>r.id===id);const o=organizationFor(r);assert.ok(matchesResource(r,{...empty,query,province:'Yukon',city:'Whitehorse'},o.name,o.type),query);}
 const r=resources.find(r=>r.id==='211-canada');const o=organizationFor(r);assert.ok(matchesResource(r,{...empty,province:'Quebec',city:'Montreal'},o.name,o.type));
});
