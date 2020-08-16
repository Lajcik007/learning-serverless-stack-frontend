export const REGION = 'eu-central-1';

export default {
    s3: {
        REGION,
        BUCKET: "notes-app-api2-dev-attachmentsbucket-b9136eqkbczc"
    },
    apiGateway: {
        REGION,
        URL: "https://eawnwn1fl3.execute-api.eu-central-1.amazonaws.com/dev"
    },
    cognito: {
        REGION,
        USER_POOL_ID: "eu-central-1_3EtBs2njA",
        APP_CLIENT_ID: "3iv1kt7r7mp64iruqn453hveg3",
        IDENTITY_POOL_ID: "eu-central-1:8ab69d4f-1a93-4864-b859-774edb3e7fc7"
    },
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HBf7tCnhFYTPD9RIaKQEW9u23cAwuBllxowxQZYzV1gzBY1SIjlIEajqlei0NypDAJ6qGmLLPaGxXj9AUiVgb6x00tVPY4rDT",
};
