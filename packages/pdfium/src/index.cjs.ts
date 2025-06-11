import createPdfium from './vendor/pdfium.cjs';
import type { PdfiumRuntimeMethods } from './runtime';
import { createWrappedModule, type PdfiumModule, type WrappedPdfiumModule } from './base';

// Re-export all types from base
export type {
  PdfiumModule,
  PdfiumRuntimeMethods,
  Type,
  CWrappedFunc,
  NameToType,
  NamesToType,
  Functions,
  Wrapped,
  Methods,
  WrappedPdfiumModule,
} from './base';

export async function init(moduleOverrides: Partial<PdfiumModule>): Promise<WrappedPdfiumModule> {
  const pdfium = await createPdfium<PdfiumRuntimeMethods>(moduleOverrides);
  return createWrappedModule(pdfium);
}
