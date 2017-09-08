import { PlaceStorageService } from './place-storage.service';
import { PlaceStorageMockService } from './place-storage.mock.service';
import { Config } from '../../config';

export default () => {
  return { provide: PlaceStorageService, useFactory: () => Config.mock ? new PlaceStorageMockService() : new PlaceStorageService(), deps: [] }
}