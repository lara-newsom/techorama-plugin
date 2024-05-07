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
    tags: `scope:${options.scope},domain:${options.domain},type:${options.type}`,
    name: `${options.scope}-${options.domain}-${options.type}-${options.name}`,
    projectNameAndRootFormat: 'as-provided',
    directory: `libs/${options.scope}/${options.domain}/${options.type}/${options.name}`,
    importPath: `@Techorama/${options.scope}/${options.domain}/${options.type}/${options.name}`
  })
}

export default myGeneratorGenerator;
