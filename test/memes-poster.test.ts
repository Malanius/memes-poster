import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as MemesPoster from '../lib/memes-poster-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new MemesPoster.MemesPosterStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
