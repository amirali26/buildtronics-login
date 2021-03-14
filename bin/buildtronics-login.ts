#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { BuildtronicsLoginStack } from '../lib/buildtronics-login-cognito-stack';

const envEU  = { account: '460234074473', region: 'eu-west-1' };

const app = new cdk.App();
new BuildtronicsLoginStack(app, 'BuildtronicsLoginCognitoStack', {env: envEU});


// Something random