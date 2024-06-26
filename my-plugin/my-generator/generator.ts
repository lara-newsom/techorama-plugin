import {
  Tree,
  generateFiles,
  joinPathFragments,
  readProjectConfiguration,
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

      await generateLibrary(tree, libOptions);

      const codePath = `libs/${options.scope}/${options.domain}/${type}/${options.name}`;
      updateCodeownersFile(tree, codePath, options.codeowners);

      const formattedName = `${options.scope}-${options.domain}-${type}-${options.name}`;
      createTestSetupFile(tree, formattedName);
    }
  } else {
    await generateLibrary(tree, options);

    const codePath = `libs/${options.scope}/${options.domain}/${options.type}/${options.name}`;
    updateCodeownersFile(tree, codePath, options.codeowners);

    const formattedName = `${options.scope}-${options.domain}-${options.type}-${options.name}`;
    createTestSetupFile(tree, formattedName);
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

function updateCodeownersFile(tree: Tree, path: string, codeowners?: string) {
  if(codeowners){
    const filePath = './.github/CODEOWNERS';
    const codeownersFile = tree.read(filePath);

    if(codeownersFile) {
      tree.write(
        filePath,
        Buffer.concat(
          [codeownersFile, Buffer.from(`\n/${path} ${codeowners}`)]
        )
      )
    }
  }
}

function createTestSetupFile(tree: Tree, name: string) {
  const libraryRoot = readProjectConfiguration(tree, name).root;
  generateFiles(tree, joinPathFragments(__dirname, 'files'), libraryRoot, {
    template: ''
  });
}

export default myGeneratorGenerator;
