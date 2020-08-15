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
        IDENTITY_POOL_ID: "eu-central-1:3d4be992-fc87-4910-99dd-07d744b22648"
    }
};
