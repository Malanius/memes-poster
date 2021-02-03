#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MemesPosterStack } from '../lib/memes-poster-stack';

const app = new cdk.App();
new MemesPosterStack(app, 'MemesPosterStack');
