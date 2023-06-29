import { FileInterface } from 'interfaces/file';
import { StudioInterface } from 'interfaces/studio';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  status: string;
  studio_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  file?: FileInterface[];
  studio?: StudioInterface;
  user?: UserInterface;
  _count?: {
    file?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  studio_id?: string;
  user_id?: string;
}
