import {
  Tree,
} from '@nx/devkit';
import { MyGeneratorGeneratorSchema } from './schema';
import { libraryGenerator} from '@nx/angular/generators';
import { ALL_TYPES } from './type-constants';

export async function myGeneratorGenerator(
  tree: Tree,
  options: MyGeneratorGeneratorSchema
) {
  if(options.type === 'all') {
    for(const type of ALL_TYPES) {
      const libOptions = {
        ...options,
        type
      };

      await generateLibrary(tree, libOptions)
    }
  } else {
    await generateLibrary(tree, options)
  }
}

async function generateLibrary(tree: Tree, options: MyGeneratorGeneratorSchema) {
  return libraryGenerator(tree, {
    tags: `scope:${options.scope},domain:${options.domain},type:${options.type}`,
    name: `${options.scope}-${options.domain}-${options.type}-${options.name}`,
    projectNameAndRootFormat: 'as-provided',
    directory: `libs/${options.scope}/${options.domain}/${options.type}/${options.name}`,
    importPath: `@Techorama/${options.scope}/${options.domain}/${options.type}/${options.name}`
  });
}

export default myGeneratorGenerator;
