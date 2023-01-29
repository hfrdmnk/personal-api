// Returns the most recent played song from Apple Music
// import * as dotenv from 'dotenv';
// dotenv.config();
import jwt, { Secret } from 'jsonwebtoken';
import fs from 'fs';

import { VercelRequest, VercelResponse } from '@vercel/node';
export default (req: VercelRequest, res: VercelResponse): void => {
	const privateKey = process.env.APPLE_PRIVATE_KEY;
	const teamId = '';
	const keyId = '';

	const token = jwt.sign({}, privateKey as Secret, {
		algorithm: 'ES256',
		expiresIn: '180d',
		issuer: teamId,
		header: {
			alg: 'ES256',
			kid: keyId,
		},
	});

	res.setHeader('Content-Type', 'application/json');
	res.json(JSON.stringify({ token }));
};

// Cron Job (Github Actions) every 5 minutes (https://vercel.com/guides/how-to-setup-cron-jobs-on-vercel)
// Fetch Data and save to JSON file (https://www.npmjs.com/package/node-json-db)
// Display Data: Get Data from JSON file
