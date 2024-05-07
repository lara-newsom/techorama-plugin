import {
  Tree,
} from '@nx/devkit';
import { MyGeneratorGeneratorSchema } from './schema';
import { libraryGenerator} from '@nx/angular/generators';

export async function myGeneratorGenerator(
  tree: Tree,
  options: MyGeneratorGeneratorSchema
) {
  await libraryGenerator(tree, options)
}

export default myGeneratorGenerator;
