import * as cdk from '@aws-cdk/core';
import {BlockPublicAccess, Bucket} from "@aws-cdk/aws-s3";
import {Aws} from "@aws-cdk/core";

export class SampleAppStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const s3Bucket = new Bucket(this, "testBucket", {
            // bucketName: 'test-bucket-' + Aws.ACCOUNT_ID,
            blockPublicAccess: BlockPublicAccess.BLOCK_ALL
        });
    }
}
