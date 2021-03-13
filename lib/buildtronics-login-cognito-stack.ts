import * as cdk from '@aws-cdk/core';
import * as cognito from '@aws-cdk/aws-cognito';

export class BuildtronicsLoginStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const _cognito = new cognito.UserPool(this, 'buildtronicsuserpool', {
      userPoolName: 'buildtronicsuserpool',
      selfSignUpEnabled: false,
      userVerification: {
        emailSubject: 'Buildtronics - Please verify your email',
        emailBody: 'Hello {username}, Thanks for signing up for a Buildtronics account. To continue, please verify your email address using the following code: Your verification code is {####} ',
        emailStyle: cognito.VerificationEmailStyle.CODE,
      },

      signInAliases: {
        username: true,
      },
      autoVerify: {
        email: true,
        phone: false,
      },
      signInCaseSensitive: false,
      standardAttributes: {
        fullname: {
          required: true,
          mutable: true,
        },
        address: {
          required: true,
          mutable: true,
        },
        birthdate: {
          required: true,
          mutable: false,
        },
      },
      mfa: cognito.Mfa.OFF,
      passwordPolicy: {
        minLength: 8,
        requireDigits: true,
        requireLowercase: true,
        requireSymbols: true,
        requireUppercase: true,
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
      emailSettings: {
        from: 'hello@worldwideandweb.com',
        replyTo: 'hello@worldwideandweb.com'
      }
    });
  }
}
