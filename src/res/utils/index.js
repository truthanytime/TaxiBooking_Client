import { STRIPE_TEST_PUBLIC_KEY, STRIPE_PUBLIC_KEY } from "../constants";

export const getStripeKey = () => {
    return STRIPE_TEST_PUBLIC_KEY;
    // return getStripeTestMode() ? STRIPE_TEST_PUBLIC_KEY : STRIPE_PUBLIC_KEY;
};

export const getStripeTestMode = () => {
    return Boolean(window.localStorage.stripeTestMode);
};

export const setStripeTestMode = value => {
    if (value) {
        window.localStorage.stripeTestMode = '1';
    }
    else {
        window.localStorage.removeItem('stripeTestMode');
    }
}

export const getTokenFromPath = value => {
    if (value && value.split('/').length > 1) {
        return value.split('/')[2];
    }
    else {
        return '';
    }
}