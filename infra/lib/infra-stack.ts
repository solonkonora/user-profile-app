import * as cdk from "aws-cdk-lib";
import {
  OriginAccessControlBase,
  OriginAccessIdentity,
  ViewerProtocolPolicy,
} from "aws-cdk-lib/aws-cloudfront";
import { Construct } from "constructs";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const websiteBucket = new cdk.aws_s3.Bucket(this, "WebsiteBucket", {
      websiteIndexDocument: "index.html",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const originAccessIdentity = new cdk.aws_cloudfront.OriginAccessIdentity(
      this,
      "OAI",
      {}
    );

    websiteBucket.addToResourcePolicy(
      new cdk.aws_iam.PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [websiteBucket.arnForObjects("*")],
        principals: [originAccessIdentity.grantPrincipal],
      })
    );

    const s3Origin = origins.S3BucketOrigin.withOriginAccessIdentity(
      websiteBucket,
      {
        originAccessIdentity,
      }
    );

    const cloudFrontDist = new cdk.aws_cloudfront.Distribution(
      this,
      "CloudFrontDistribution",
      {
        defaultRootObject: "index.html",
        defaultBehavior: {
          origin: s3Origin,
          compress: true,
          viewerProtocolPolicy:
            cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
      }
    );

    //create a website deployment for my dist content
    new cdk.aws_s3_deployment.BucketDeployment(this, "DeployWebsite", {
      sources: [cdk.aws_s3_deployment.Source.asset("dist")],
      destinationBucket: websiteBucket,
      distribution: cloudFrontDist,
      distributionPaths: ["/*"],
    });

    new cdk.CfnOutput(this, "WebsiteURL", {
      value: websiteBucket.bucketName,
    });

    new cdk.CfnOutput(this, "CloudFrontURL", {
      value: cloudFrontDist.domainName,
    });
  }
}
