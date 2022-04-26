/* eslint-disable no-console */

import { readFile } from 'fs/promises';

export type IValidPaths = 'posts' | 'blogs';

const getData = (fileName: IValidPaths) => {
  const PATH = '../content/generated/';
  return readFile(`${PATH}${fileName}.json`, {
    encoding: 'utf8',
  });
};

export default async function api(__req: any, res: any) {
  try {
    const data = await getData(__req.query.resourceType);
    res.status(200).json({
      code: 200,
      success: true,
      data: JSON.parse(data),
      error: null,
    });
  } catch (e) {
    res.status(404).json({
      code: 404,
      success: false,
      data: null,
      error: 'Not found',
    });
    console.error(e);
  }
}
