import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy_key_for_builds', {
    // apiVersion: '2025-01-27.preview', // Let it use default for now to avoid version mismatch in types
    appInfo: {
        name: 'Lemuria Healing Platform',
        version: '0.1.0',
    },
});
