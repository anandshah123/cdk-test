import * as cdk from '@aws-cdk/core';
import {BlockPublicAccess, Bucket} from "@aws-cdk/aws-s3";

export class SampleAppStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const s3Bucket1 = new Bucket(this, "b1", {
            blockPublicAccess: BlockPublicAccess.BLOCK_ALL
        });

        const s3Bucket2 = new Bucket(this, "b2", {
            blockPublicAccess: BlockPublicAccess.BLOCK_ALL
        });

    }
}
