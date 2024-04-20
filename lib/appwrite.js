import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';
import SignIn from '../app/(auth)/sign-in';

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
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        await SignIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            },
        );

    } catch (error) {
        console.log({ error });
        throw new Error(error);
    }
}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailSession(email, password);
        return session;
    } catch (error) {
        console.log({ error });
        throw new Error(error);
    }
}