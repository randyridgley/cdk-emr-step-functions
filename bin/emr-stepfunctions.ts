#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { EmrStepfunctionsStack } from '../lib/emr-stepfunctions-stack';

const app = new cdk.App();
new EmrStepfunctionsStack(app, 'EmrStepfunctionsStack');
