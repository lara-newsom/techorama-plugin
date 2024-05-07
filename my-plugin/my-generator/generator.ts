import {
  Tree,
} from '@nx/devkit';
import { MyGeneratorGeneratorSchema } from './schema';
import { libraryGenerator} from '@nx/angular/generators';

export async function myGeneratorGenerator(
  tree: Tree,
  options: MyGeneratorGeneratorSchema
) {
  await libraryGenerator(tree, {
    name: options.name,
    projectNameAndRootFormat: 'as-provided',
    directory: `libs/${options.directoryName}/${options.name}`,
    importPath: `@Techorama/${options.directoryName}/${options.name}`
  })
}

export default myGeneratorGenerator;
