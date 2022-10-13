import {rest} from 'msw';

export const handlers = [
	rest.post('/api/1.0/users', (req, res, ctx) => {
		return res(
			ctx.status(200),
            ctx.json({
                username: "user1",
                email: "user1@mail.com",
                password: "same-password"
            })
		);
	}),
];
