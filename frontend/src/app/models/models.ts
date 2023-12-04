export class Models {
}
export class AuthorSearch {
  numFound: number = 0;
  start: number = 0;
  numFoundExact: boolean = false;
  docs: DocAboutAuthor[] = [];
}
export class DocAboutAuthor {
  key: string = '';
  type: string = '';
  name: string = '';
  alternate_names?: string[] = [];
  birth_date?: string = '';
  death_date?: string = '';
  top_work: string = '';
  work_count: number = 0;
  top_subjects?: string[] = [];
  _version_: number = 0;
}
export class AuthorDetail {
  name: string = '';
  personal_name: string = '';
  death_date: string = '';
  alternate_names: string[] = [];
  created: CreatedTime = new CreatedTime();
  last_modified: CreatedTime = new CreatedTime();
  latest_revision: number = 0;
  key: string = '';
  birth_date: string = '';
  revision: number = 0;
  type: string = '';
  remote_ids: RemoteIds = new RemoteIds();
}
export class AuthorWorks {
  links: Links = new Links();
  size: number = 0;
  entries: WorksEntry[] = [];
}
export class Links {
  self: string = '';
  author: string = '';
  next: string = '';
}

export class WorksEntry {
  type: string = '';
  title: string = '';
  subjects: string[] = [];
  subject_people: string[] = [];
  authors: Author[] = [];
  key: string = '';
  latest_revision: number = 0;
  revision: number = 0;
  created: CreatedTime = new CreatedTime();
  last_modified: CreatedTime = new CreatedTime();
}
export class CreatedTime {
  type: string = '';
  value: Date = new Date();
}
export class RemoteIds {
  viaf: string = '';
  wikidata: string = '';
  isni: string = '';
}
export class Author {
  type: { key: string; } = { key: '' };
  author: { key: string; } = { key: '' };
}


