import { Client, Account } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.com/v1',
    platform: 'com.benashertechnologies.aora',
    projectId: '6623ed67b145ad49da83',
    databaseId: '6623f01b385881b5a90e',
    userCollectionId: '6623f060df873bf33d20',
    videoCollectionId: '6623f0d5b045339b77e4',
    storageId: '6623f360468106dbd767'
}

// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
    ;

const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}