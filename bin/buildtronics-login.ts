#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { BuildtronicsLoginStack } from '../lib/buildtronics-login-cognito-stack';

const app = new cdk.App();
new BuildtronicsLoginStack(app, 'BuildtronicsLoginCognitoStack');
