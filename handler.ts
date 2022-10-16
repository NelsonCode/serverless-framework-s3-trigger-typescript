import { S3Event } from "aws-lambda";

export const hello = async (event: S3Event) => {
  const bucket = event.Records[0].s3.bucket.name;
  const file = event.Records[0].s3.object.key;

  console.log(`el archivo con el nombre ${file} se subio a ${bucket}`);
};
