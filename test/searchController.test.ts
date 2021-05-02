import * as core from 'express-serve-static-core';
import request from 'supertest';
import { serverInstance } from '../src/server';
import { RouteControllersConfig } from '../src/server/RouteControllersConfig';
import { FilterDto } from '../src/dto/FilterDto';
import { mockSearch } from './search.mock';

let app: core.Express;
const path = [RouteControllersConfig.routePrefix, 'search'].join('/');
const validFilterRequest: FilterDto = {
	startDate: new Date('2021-04-01'),
	endDate: new Date('2019-04-01'),
	minCount: 100,
	maxCount: 500,
};

const inValidFilterRequest: FilterDto = {
	startDate: new Date('2021-04-99'),
	endDate: new Date('2019-04-01'),
	minCount: -5,
	maxCount: -1,
};

beforeAll(() => {
	mockSearch();
	app = serverInstance();
});

describe(`GET ${path}`, () => {
	test('should return 200 OK', async () => {
		const resp = await request(app).get(path);
		expect(resp.status).toBe(200);
		expect(resp.text.length).toBeGreaterThan(0);
		expect(Array.isArray(resp.body)).toBe(true);
		expect(resp.body.length).toBeGreaterThan(0);
	});
});

describe(`POST ${path}`, () => {
	test('should return 200 OK on valid request body', async () => {
		const resp = await request(app).post(path).send(validFilterRequest);
		expect(resp.status).toBe(200);
		expect(resp.text.length).toBeGreaterThan(0);
		expect(resp.body?.code).not.toBeUndefined();
		expect(resp.body?.msg).not.toBeUndefined();
		expect(resp.body?.records).toBeTruthy();
	});

	test('should return 400 BAD REQUEST on invalid request body', async () => {
		const resp = await request(app).post(path).send(inValidFilterRequest);
		expect(resp.status).toBe(400);
		expect(resp.text.length).toBeGreaterThan(0);
		expect(resp.body?.name).toBe('BadRequestError');
		expect(resp.body?.message).not.toBeUndefined();
		expect(Array.isArray(resp.body?.errors)).toBe(true);
		expect(resp.body?.errors.length).toBeGreaterThan(0);
	});
});
