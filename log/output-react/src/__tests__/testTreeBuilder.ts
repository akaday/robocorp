import { TreeBuilder } from '../treebuild/treeBuilder';
import { getOpts } from '../treebuild/options';

test('TreeBuilder can create flattened tree from messages.', async () => {
  const treeBuilder = new TreeBuilder();

  const opts = getOpts();

  opts.initialContents = `
  V 0.0.2
  T 2023-04-30T13:35:49.798+00:00
  ID 1|eb887eee-e75b-11ed-bdec-202b20a029af
  I "sys.platform=win32"
  I "python=3.9.16 (main, Mar  8 2023, 10:39:24) [MSC v.1916 64 bit (AMD64)]"
  M a:"Robot1"
  SR a|0.016
  M c:"Simple Task"
  M d:"Robot1"
  M e:"/path/to/file.py"
  M f:""
  P b:c|d|e|f|0
  ST b|0.016
  `;
  await treeBuilder.addInitialContents();
  expect(treeBuilder.flattened.entries.length).toBe(1);
  expect(treeBuilder.flattened.stack.length).toBe(1);

  opts.appendedContents.push(`
  M g:"PASS"
  M h:"Ok"
  ET g|h|0.017
  ER g|0.017  
  `);
  await treeBuilder.onAppendedContents();
  expect(treeBuilder.flattened.entries.length).toBe(1);
  expect(treeBuilder.flattened.stack.length).toBe(0);
});
