import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as BuildtronicsLogin from '../lib/buildtronics-login-cognito-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new BuildtronicsLogin.BuildtronicsLoginStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
