declare namespace App {
	interface Locals {
		session: {
			userId: string;
			claims: import('@clerk/clerk-sdk-node').ClerkJWTClaims;
		};
	}
}
