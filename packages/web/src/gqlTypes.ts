export type Maybe<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  JSON: any,
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
   __typename?: 'Directory',
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
   __typename?: 'DirectoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
   __typename?: 'DirectoryEdge',
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type DirectoryGroupConnection = {
   __typename?: 'DirectoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type File = Node & {
   __typename?: 'File',
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
   __typename?: 'FileConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
   __typename?: 'FileEdge',
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type FileGroupConnection = {
   __typename?: 'FileGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type Internal = {
   __typename?: 'Internal',
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Query = {
   __typename?: 'Query',
  file?: Maybe<File>,
  allFile: FileConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  sanityFileAsset?: Maybe<SanityFileAsset>,
  allSanityFileAsset: SanityFileAssetConnection,
  sanityImageAsset?: Maybe<SanityImageAsset>,
  allSanityImageAsset: SanityImageAssetConnection,
  sanitySite?: Maybe<SanitySite>,
  allSanitySite: SanitySiteConnection,
  sanityUpgradable?: Maybe<SanityUpgradable>,
  allSanityUpgradable: SanityUpgradableConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  matchPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityFileAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  source?: Maybe<SanityAssetSourceDataFilterInput>,
  _rawSource?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityFileAssetArgs = {
  filter?: Maybe<SanityFileAssetFilterInput>,
  sort?: Maybe<SanityFileAssetSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityImageAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  metadata?: Maybe<SanityImageMetadataFilterInput>,
  source?: Maybe<SanityAssetSourceDataFilterInput>,
  fixed?: Maybe<SanityImageFixedFilterInput>,
  fluid?: Maybe<SanityImageFluidFilterInput>,
  _rawMetadata?: Maybe<JsonQueryOperatorInput>,
  _rawSource?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityImageAssetArgs = {
  filter?: Maybe<SanityImageAssetFilterInput>,
  sort?: Maybe<SanityImageAssetSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanitySiteArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<SanityLocaleTextFilterInput>,
  icon?: Maybe<SanityFigureFilterInput>,
  logo?: Maybe<SanityFigureFilterInput>,
  color?: Maybe<SanityColorFilterInput>,
  _rawDescription?: Maybe<JsonQueryOperatorInput>,
  _rawIcon?: Maybe<JsonQueryOperatorInput>,
  _rawLogo?: Maybe<JsonQueryOperatorInput>,
  _rawColor?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanitySiteArgs = {
  filter?: Maybe<SanitySiteFilterInput>,
  sort?: Maybe<SanitySiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityUpgradableArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  category?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  vendor?: Maybe<StringQueryOperatorInput>,
  homepage?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<SanityLocaleTextFilterInput>,
  icon?: Maybe<SanityFigureFilterInput>,
  logo?: Maybe<SanityFigureFilterInput>,
  color?: Maybe<SanityColorFilterInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawDescription?: Maybe<JsonQueryOperatorInput>,
  _rawIcon?: Maybe<JsonQueryOperatorInput>,
  _rawLogo?: Maybe<JsonQueryOperatorInput>,
  _rawColor?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityUpgradableArgs = {
  filter?: Maybe<SanityUpgradableFilterInput>,
  sort?: Maybe<SanityUpgradableSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type SanityAssetSourceData = {
   __typename?: 'SanityAssetSourceData',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  sanityId?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type SanityAssetSourceDataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  sanityId?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
};

export type SanityBlock = {
   __typename?: 'SanityBlock',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  sanityChildren?: Maybe<Array<Maybe<SanitySpan>>>,
  style?: Maybe<Scalars['String']>,
  list?: Maybe<Scalars['String']>,
};

export type SanityBlockOrFigure = SanityBlock | SanityFigure;

export type SanityColor = {
   __typename?: 'SanityColor',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  hex?: Maybe<Scalars['String']>,
  alpha?: Maybe<Scalars['Float']>,
  hsl?: Maybe<SanityHslaColor>,
  hsv?: Maybe<SanityHsvaColor>,
  rgb?: Maybe<SanityRgbaColor>,
};

export type SanityColorFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  hex?: Maybe<StringQueryOperatorInput>,
  alpha?: Maybe<FloatQueryOperatorInput>,
  hsl?: Maybe<SanityHslaColorFilterInput>,
  hsv?: Maybe<SanityHsvaColorFilterInput>,
  rgb?: Maybe<SanityRgbaColorFilterInput>,
};

export type SanityDocument = {
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
};

export type SanityFigure = {
   __typename?: 'SanityFigure',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  alt?: Maybe<Scalars['String']>,
  asset?: Maybe<SanityImageAsset>,
  hotspot?: Maybe<SanityImageHotspot>,
  crop?: Maybe<SanityImageCrop>,
};

export type SanityFigureFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  alt?: Maybe<StringQueryOperatorInput>,
  asset?: Maybe<SanityImageAssetFilterInput>,
  hotspot?: Maybe<SanityImageHotspotFilterInput>,
  crop?: Maybe<SanityImageCropFilterInput>,
};

export type SanityFile = {
   __typename?: 'SanityFile',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  asset?: Maybe<SanityFileAsset>,
};

export type SanityFileAsset = SanityDocument & Node & {
   __typename?: 'SanityFileAsset',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  originalFilename?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  sha1hash?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  mimeType?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  assetId?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  source?: Maybe<SanityAssetSourceData>,
  _rawSource?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityFileAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityFileAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityFileAssetConnection = {
   __typename?: 'SanityFileAssetConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityFileAssetEdge>,
  nodes: Array<SanityFileAsset>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityFileAssetGroupConnection>,
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum
};


export type SanityFileAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityFileAssetFieldsEnum
};

export type SanityFileAssetEdge = {
   __typename?: 'SanityFileAssetEdge',
  next?: Maybe<SanityFileAsset>,
  node: SanityFileAsset,
  previous?: Maybe<SanityFileAsset>,
};

export enum SanityFileAssetFieldsEnum {
  Id = '_id',
  Type = '_type',
  CreatedAt = '_createdAt',
  UpdatedAt = '_updatedAt',
  Rev = '_rev',
  Key = '_key',
  OriginalFilename = 'originalFilename',
  Label = 'label',
  Title = 'title',
  Description = 'description',
  Sha1hash = 'sha1hash',
  Extension = 'extension',
  MimeType = 'mimeType',
  Size = 'size',
  AssetId = 'assetId',
  Path = 'path',
  Url = 'url',
  SourceKey = 'source____key',
  SourceType = 'source____type',
  SourceName = 'source___name',
  SourceSanityId = 'source___sanityId',
  SourceUrl = 'source___url',
  RawSource = '_rawSource',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SanityFileAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  source?: Maybe<SanityAssetSourceDataFilterInput>,
  _rawSource?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityFileAssetGroupConnection = {
   __typename?: 'SanityFileAssetGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityFileAssetEdge>,
  nodes: Array<SanityFileAsset>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityFileAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityFileAssetFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityGeopoint = {
   __typename?: 'SanityGeopoint',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  lat?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
  alt?: Maybe<Scalars['Float']>,
};

export type SanityGeopointFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  lat?: Maybe<FloatQueryOperatorInput>,
  lng?: Maybe<FloatQueryOperatorInput>,
  alt?: Maybe<FloatQueryOperatorInput>,
};

export type SanityHslaColor = {
   __typename?: 'SanityHslaColor',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  h?: Maybe<Scalars['Float']>,
  s?: Maybe<Scalars['Float']>,
  l?: Maybe<Scalars['Float']>,
  a?: Maybe<Scalars['Float']>,
};

export type SanityHslaColorFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  h?: Maybe<FloatQueryOperatorInput>,
  s?: Maybe<FloatQueryOperatorInput>,
  l?: Maybe<FloatQueryOperatorInput>,
  a?: Maybe<FloatQueryOperatorInput>,
};

export type SanityHsvaColor = {
   __typename?: 'SanityHsvaColor',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  h?: Maybe<Scalars['Float']>,
  s?: Maybe<Scalars['Float']>,
  v?: Maybe<Scalars['Float']>,
  a?: Maybe<Scalars['Float']>,
};

export type SanityHsvaColorFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  h?: Maybe<FloatQueryOperatorInput>,
  s?: Maybe<FloatQueryOperatorInput>,
  v?: Maybe<FloatQueryOperatorInput>,
  a?: Maybe<FloatQueryOperatorInput>,
};

export type SanityImage = {
   __typename?: 'SanityImage',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  asset?: Maybe<SanityImageAsset>,
  hotspot?: Maybe<SanityImageHotspot>,
  crop?: Maybe<SanityImageCrop>,
};

export type SanityImageAsset = SanityDocument & Node & {
   __typename?: 'SanityImageAsset',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  originalFilename?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  sha1hash?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  mimeType?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  assetId?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  metadata?: Maybe<SanityImageMetadata>,
  source?: Maybe<SanityAssetSourceData>,
  fixed?: Maybe<SanityImageFixed>,
  fluid?: Maybe<SanityImageFluid>,
  _rawMetadata?: Maybe<Scalars['JSON']>,
  _rawSource?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityImageAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityImageAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityImageAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<SanityImageFormat>
};


export type SanityImageAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  sizes?: Maybe<Scalars['String']>,
  toFormat?: Maybe<SanityImageFormat>
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityImageAssetConnection = {
   __typename?: 'SanityImageAssetConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityImageAssetEdge>,
  nodes: Array<SanityImageAsset>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityImageAssetGroupConnection>,
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum
};


export type SanityImageAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityImageAssetFieldsEnum
};

export type SanityImageAssetEdge = {
   __typename?: 'SanityImageAssetEdge',
  next?: Maybe<SanityImageAsset>,
  node: SanityImageAsset,
  previous?: Maybe<SanityImageAsset>,
};

export enum SanityImageAssetFieldsEnum {
  Id = '_id',
  Type = '_type',
  CreatedAt = '_createdAt',
  UpdatedAt = '_updatedAt',
  Rev = '_rev',
  Key = '_key',
  OriginalFilename = 'originalFilename',
  Label = 'label',
  Title = 'title',
  Description = 'description',
  Sha1hash = 'sha1hash',
  Extension = 'extension',
  MimeType = 'mimeType',
  Size = 'size',
  AssetId = 'assetId',
  Path = 'path',
  Url = 'url',
  MetadataKey = 'metadata____key',
  MetadataType = 'metadata____type',
  MetadataLocationKey = 'metadata___location____key',
  MetadataLocationType = 'metadata___location____type',
  MetadataLocationLat = 'metadata___location___lat',
  MetadataLocationLng = 'metadata___location___lng',
  MetadataLocationAlt = 'metadata___location___alt',
  MetadataDimensionsKey = 'metadata___dimensions____key',
  MetadataDimensionsType = 'metadata___dimensions____type',
  MetadataDimensionsHeight = 'metadata___dimensions___height',
  MetadataDimensionsWidth = 'metadata___dimensions___width',
  MetadataDimensionsAspectRatio = 'metadata___dimensions___aspectRatio',
  MetadataPaletteKey = 'metadata___palette____key',
  MetadataPaletteType = 'metadata___palette____type',
  MetadataPaletteDarkMutedKey = 'metadata___palette___darkMuted____key',
  MetadataPaletteDarkMutedType = 'metadata___palette___darkMuted____type',
  MetadataPaletteDarkMutedBackground = 'metadata___palette___darkMuted___background',
  MetadataPaletteDarkMutedForeground = 'metadata___palette___darkMuted___foreground',
  MetadataPaletteDarkMutedPopulation = 'metadata___palette___darkMuted___population',
  MetadataPaletteDarkMutedTitle = 'metadata___palette___darkMuted___title',
  MetadataPaletteLightVibrantKey = 'metadata___palette___lightVibrant____key',
  MetadataPaletteLightVibrantType = 'metadata___palette___lightVibrant____type',
  MetadataPaletteLightVibrantBackground = 'metadata___palette___lightVibrant___background',
  MetadataPaletteLightVibrantForeground = 'metadata___palette___lightVibrant___foreground',
  MetadataPaletteLightVibrantPopulation = 'metadata___palette___lightVibrant___population',
  MetadataPaletteLightVibrantTitle = 'metadata___palette___lightVibrant___title',
  MetadataPaletteDarkVibrantKey = 'metadata___palette___darkVibrant____key',
  MetadataPaletteDarkVibrantType = 'metadata___palette___darkVibrant____type',
  MetadataPaletteDarkVibrantBackground = 'metadata___palette___darkVibrant___background',
  MetadataPaletteDarkVibrantForeground = 'metadata___palette___darkVibrant___foreground',
  MetadataPaletteDarkVibrantPopulation = 'metadata___palette___darkVibrant___population',
  MetadataPaletteDarkVibrantTitle = 'metadata___palette___darkVibrant___title',
  MetadataPaletteVibrantKey = 'metadata___palette___vibrant____key',
  MetadataPaletteVibrantType = 'metadata___palette___vibrant____type',
  MetadataPaletteVibrantBackground = 'metadata___palette___vibrant___background',
  MetadataPaletteVibrantForeground = 'metadata___palette___vibrant___foreground',
  MetadataPaletteVibrantPopulation = 'metadata___palette___vibrant___population',
  MetadataPaletteVibrantTitle = 'metadata___palette___vibrant___title',
  MetadataPaletteDominantKey = 'metadata___palette___dominant____key',
  MetadataPaletteDominantType = 'metadata___palette___dominant____type',
  MetadataPaletteDominantBackground = 'metadata___palette___dominant___background',
  MetadataPaletteDominantForeground = 'metadata___palette___dominant___foreground',
  MetadataPaletteDominantPopulation = 'metadata___palette___dominant___population',
  MetadataPaletteDominantTitle = 'metadata___palette___dominant___title',
  MetadataPaletteLightMutedKey = 'metadata___palette___lightMuted____key',
  MetadataPaletteLightMutedType = 'metadata___palette___lightMuted____type',
  MetadataPaletteLightMutedBackground = 'metadata___palette___lightMuted___background',
  MetadataPaletteLightMutedForeground = 'metadata___palette___lightMuted___foreground',
  MetadataPaletteLightMutedPopulation = 'metadata___palette___lightMuted___population',
  MetadataPaletteLightMutedTitle = 'metadata___palette___lightMuted___title',
  MetadataPaletteMutedKey = 'metadata___palette___muted____key',
  MetadataPaletteMutedType = 'metadata___palette___muted____type',
  MetadataPaletteMutedBackground = 'metadata___palette___muted___background',
  MetadataPaletteMutedForeground = 'metadata___palette___muted___foreground',
  MetadataPaletteMutedPopulation = 'metadata___palette___muted___population',
  MetadataPaletteMutedTitle = 'metadata___palette___muted___title',
  MetadataLqip = 'metadata___lqip',
  MetadataHasAlpha = 'metadata___hasAlpha',
  MetadataIsOpaque = 'metadata___isOpaque',
  SourceKey = 'source____key',
  SourceType = 'source____type',
  SourceName = 'source___name',
  SourceSanityId = 'source___sanityId',
  SourceUrl = 'source___url',
  FixedBase64 = 'fixed___base64',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FluidBase64 = 'fluid___base64',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  RawMetadata = '_rawMetadata',
  RawSource = '_rawSource',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SanityImageAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  metadata?: Maybe<SanityImageMetadataFilterInput>,
  source?: Maybe<SanityAssetSourceDataFilterInput>,
  fixed?: Maybe<SanityImageFixedFilterInput>,
  fluid?: Maybe<SanityImageFluidFilterInput>,
  _rawMetadata?: Maybe<JsonQueryOperatorInput>,
  _rawSource?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityImageAssetGroupConnection = {
   __typename?: 'SanityImageAssetGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityImageAssetEdge>,
  nodes: Array<SanityImageAsset>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityImageAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityImageAssetFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityImageCrop = {
   __typename?: 'SanityImageCrop',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  top?: Maybe<Scalars['Float']>,
  bottom?: Maybe<Scalars['Float']>,
  left?: Maybe<Scalars['Float']>,
  right?: Maybe<Scalars['Float']>,
};

export type SanityImageCropFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  top?: Maybe<FloatQueryOperatorInput>,
  bottom?: Maybe<FloatQueryOperatorInput>,
  left?: Maybe<FloatQueryOperatorInput>,
  right?: Maybe<FloatQueryOperatorInput>,
};

export type SanityImageDimensions = {
   __typename?: 'SanityImageDimensions',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  aspectRatio?: Maybe<Scalars['Float']>,
};

export type SanityImageDimensionsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
};

export type SanityImageFixed = {
   __typename?: 'SanityImageFixed',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
};

export type SanityImageFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
};

export type SanityImageFluid = {
   __typename?: 'SanityImageFluid',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SanityImageFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export enum SanityImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type SanityImageHotspot = {
   __typename?: 'SanityImageHotspot',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  x?: Maybe<Scalars['Float']>,
  y?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

export type SanityImageHotspotFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  x?: Maybe<FloatQueryOperatorInput>,
  y?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
};

export type SanityImageMetadata = {
   __typename?: 'SanityImageMetadata',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  location?: Maybe<SanityGeopoint>,
  dimensions?: Maybe<SanityImageDimensions>,
  palette?: Maybe<SanityImagePalette>,
  lqip?: Maybe<Scalars['String']>,
  hasAlpha?: Maybe<Scalars['Boolean']>,
  isOpaque?: Maybe<Scalars['Boolean']>,
};

export type SanityImageMetadataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  location?: Maybe<SanityGeopointFilterInput>,
  dimensions?: Maybe<SanityImageDimensionsFilterInput>,
  palette?: Maybe<SanityImagePaletteFilterInput>,
  lqip?: Maybe<StringQueryOperatorInput>,
  hasAlpha?: Maybe<BooleanQueryOperatorInput>,
  isOpaque?: Maybe<BooleanQueryOperatorInput>,
};

export type SanityImagePalette = {
   __typename?: 'SanityImagePalette',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  darkMuted?: Maybe<SanityImagePaletteSwatch>,
  lightVibrant?: Maybe<SanityImagePaletteSwatch>,
  darkVibrant?: Maybe<SanityImagePaletteSwatch>,
  vibrant?: Maybe<SanityImagePaletteSwatch>,
  dominant?: Maybe<SanityImagePaletteSwatch>,
  lightMuted?: Maybe<SanityImagePaletteSwatch>,
  muted?: Maybe<SanityImagePaletteSwatch>,
};

export type SanityImagePaletteFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  darkMuted?: Maybe<SanityImagePaletteSwatchFilterInput>,
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  vibrant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  dominant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  lightMuted?: Maybe<SanityImagePaletteSwatchFilterInput>,
  muted?: Maybe<SanityImagePaletteSwatchFilterInput>,
};

export type SanityImagePaletteSwatch = {
   __typename?: 'SanityImagePaletteSwatch',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  foreground?: Maybe<Scalars['String']>,
  population?: Maybe<Scalars['Float']>,
  title?: Maybe<Scalars['String']>,
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  background?: Maybe<StringQueryOperatorInput>,
  foreground?: Maybe<StringQueryOperatorInput>,
  population?: Maybe<FloatQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SanityLocaleString = {
   __typename?: 'SanityLocaleString',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  en?: Maybe<Scalars['String']>,
  nl?: Maybe<Scalars['String']>,
};

export type SanityLocaleText = {
   __typename?: 'SanityLocaleText',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  en?: Maybe<Scalars['String']>,
  nl?: Maybe<Scalars['String']>,
};

export type SanityLocaleTextFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  en?: Maybe<StringQueryOperatorInput>,
  nl?: Maybe<StringQueryOperatorInput>,
};

export type SanityResolveReferencesConfiguration = {
  maxDepth: Scalars['Int'],
};

export type SanityRgbaColor = {
   __typename?: 'SanityRgbaColor',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  r?: Maybe<Scalars['Float']>,
  g?: Maybe<Scalars['Float']>,
  b?: Maybe<Scalars['Float']>,
  a?: Maybe<Scalars['Float']>,
};

export type SanityRgbaColorFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  r?: Maybe<FloatQueryOperatorInput>,
  g?: Maybe<FloatQueryOperatorInput>,
  b?: Maybe<FloatQueryOperatorInput>,
  a?: Maybe<FloatQueryOperatorInput>,
};

export type SanitySite = SanityDocument & Node & {
   __typename?: 'SanitySite',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  description?: Maybe<SanityLocaleText>,
  icon?: Maybe<SanityFigure>,
  logo?: Maybe<SanityFigure>,
  color?: Maybe<SanityColor>,
  _rawDescription?: Maybe<Scalars['JSON']>,
  _rawIcon?: Maybe<Scalars['JSON']>,
  _rawLogo?: Maybe<Scalars['JSON']>,
  _rawColor?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanitySite_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanitySite_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanitySite_RawDescriptionArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanitySite_RawIconArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanitySite_RawLogoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanitySite_RawColorArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanitySiteConnection = {
   __typename?: 'SanitySiteConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanitySiteEdge>,
  nodes: Array<SanitySite>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanitySiteGroupConnection>,
};


export type SanitySiteConnectionDistinctArgs = {
  field: SanitySiteFieldsEnum
};


export type SanitySiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanitySiteFieldsEnum
};

export type SanitySiteEdge = {
   __typename?: 'SanitySiteEdge',
  next?: Maybe<SanitySite>,
  node: SanitySite,
  previous?: Maybe<SanitySite>,
};

export enum SanitySiteFieldsEnum {
  Id = '_id',
  Type = '_type',
  CreatedAt = '_createdAt',
  UpdatedAt = '_updatedAt',
  Rev = '_rev',
  Key = '_key',
  Title = 'title',
  Url = 'url',
  DescriptionKey = 'description____key',
  DescriptionType = 'description____type',
  DescriptionEn = 'description___en',
  DescriptionNl = 'description___nl',
  IconKey = 'icon____key',
  IconType = 'icon____type',
  IconAlt = 'icon___alt',
  IconAssetId = 'icon___asset____id',
  IconAssetType = 'icon___asset____type',
  IconAssetCreatedAt = 'icon___asset____createdAt',
  IconAssetUpdatedAt = 'icon___asset____updatedAt',
  IconAssetRev = 'icon___asset____rev',
  IconAssetKey = 'icon___asset____key',
  IconAssetOriginalFilename = 'icon___asset___originalFilename',
  IconAssetLabel = 'icon___asset___label',
  IconAssetTitle = 'icon___asset___title',
  IconAssetDescription = 'icon___asset___description',
  IconAssetSha1hash = 'icon___asset___sha1hash',
  IconAssetExtension = 'icon___asset___extension',
  IconAssetMimeType = 'icon___asset___mimeType',
  IconAssetSize = 'icon___asset___size',
  IconAssetAssetId = 'icon___asset___assetId',
  IconAssetPath = 'icon___asset___path',
  IconAssetUrl = 'icon___asset___url',
  IconAssetMetadataKey = 'icon___asset___metadata____key',
  IconAssetMetadataType = 'icon___asset___metadata____type',
  IconAssetMetadataLqip = 'icon___asset___metadata___lqip',
  IconAssetMetadataHasAlpha = 'icon___asset___metadata___hasAlpha',
  IconAssetMetadataIsOpaque = 'icon___asset___metadata___isOpaque',
  IconAssetSourceKey = 'icon___asset___source____key',
  IconAssetSourceType = 'icon___asset___source____type',
  IconAssetSourceName = 'icon___asset___source___name',
  IconAssetSourceSanityId = 'icon___asset___source___sanityId',
  IconAssetSourceUrl = 'icon___asset___source___url',
  IconAssetFixedBase64 = 'icon___asset___fixed___base64',
  IconAssetFixedAspectRatio = 'icon___asset___fixed___aspectRatio',
  IconAssetFixedWidth = 'icon___asset___fixed___width',
  IconAssetFixedHeight = 'icon___asset___fixed___height',
  IconAssetFixedSrc = 'icon___asset___fixed___src',
  IconAssetFixedSrcSet = 'icon___asset___fixed___srcSet',
  IconAssetFixedSrcWebp = 'icon___asset___fixed___srcWebp',
  IconAssetFixedSrcSetWebp = 'icon___asset___fixed___srcSetWebp',
  IconAssetFluidBase64 = 'icon___asset___fluid___base64',
  IconAssetFluidAspectRatio = 'icon___asset___fluid___aspectRatio',
  IconAssetFluidSrc = 'icon___asset___fluid___src',
  IconAssetFluidSrcSet = 'icon___asset___fluid___srcSet',
  IconAssetFluidSrcWebp = 'icon___asset___fluid___srcWebp',
  IconAssetFluidSrcSetWebp = 'icon___asset___fluid___srcSetWebp',
  IconAssetFluidSizes = 'icon___asset___fluid___sizes',
  IconAssetRawMetadata = 'icon___asset____rawMetadata',
  IconAssetRawSource = 'icon___asset____rawSource',
  IconAssetId = 'icon___asset___id',
  IconAssetParentId = 'icon___asset___parent___id',
  IconAssetParentChildren = 'icon___asset___parent___children',
  IconAssetChildren = 'icon___asset___children',
  IconAssetChildrenId = 'icon___asset___children___id',
  IconAssetChildrenChildren = 'icon___asset___children___children',
  IconAssetInternalContent = 'icon___asset___internal___content',
  IconAssetInternalContentDigest = 'icon___asset___internal___contentDigest',
  IconAssetInternalDescription = 'icon___asset___internal___description',
  IconAssetInternalFieldOwners = 'icon___asset___internal___fieldOwners',
  IconAssetInternalIgnoreType = 'icon___asset___internal___ignoreType',
  IconAssetInternalMediaType = 'icon___asset___internal___mediaType',
  IconAssetInternalOwner = 'icon___asset___internal___owner',
  IconAssetInternalType = 'icon___asset___internal___type',
  IconHotspotKey = 'icon___hotspot____key',
  IconHotspotType = 'icon___hotspot____type',
  IconHotspotX = 'icon___hotspot___x',
  IconHotspotY = 'icon___hotspot___y',
  IconHotspotHeight = 'icon___hotspot___height',
  IconHotspotWidth = 'icon___hotspot___width',
  IconCropKey = 'icon___crop____key',
  IconCropType = 'icon___crop____type',
  IconCropTop = 'icon___crop___top',
  IconCropBottom = 'icon___crop___bottom',
  IconCropLeft = 'icon___crop___left',
  IconCropRight = 'icon___crop___right',
  LogoKey = 'logo____key',
  LogoType = 'logo____type',
  LogoAlt = 'logo___alt',
  LogoAssetId = 'logo___asset____id',
  LogoAssetType = 'logo___asset____type',
  LogoAssetCreatedAt = 'logo___asset____createdAt',
  LogoAssetUpdatedAt = 'logo___asset____updatedAt',
  LogoAssetRev = 'logo___asset____rev',
  LogoAssetKey = 'logo___asset____key',
  LogoAssetOriginalFilename = 'logo___asset___originalFilename',
  LogoAssetLabel = 'logo___asset___label',
  LogoAssetTitle = 'logo___asset___title',
  LogoAssetDescription = 'logo___asset___description',
  LogoAssetSha1hash = 'logo___asset___sha1hash',
  LogoAssetExtension = 'logo___asset___extension',
  LogoAssetMimeType = 'logo___asset___mimeType',
  LogoAssetSize = 'logo___asset___size',
  LogoAssetAssetId = 'logo___asset___assetId',
  LogoAssetPath = 'logo___asset___path',
  LogoAssetUrl = 'logo___asset___url',
  LogoAssetMetadataKey = 'logo___asset___metadata____key',
  LogoAssetMetadataType = 'logo___asset___metadata____type',
  LogoAssetMetadataLqip = 'logo___asset___metadata___lqip',
  LogoAssetMetadataHasAlpha = 'logo___asset___metadata___hasAlpha',
  LogoAssetMetadataIsOpaque = 'logo___asset___metadata___isOpaque',
  LogoAssetSourceKey = 'logo___asset___source____key',
  LogoAssetSourceType = 'logo___asset___source____type',
  LogoAssetSourceName = 'logo___asset___source___name',
  LogoAssetSourceSanityId = 'logo___asset___source___sanityId',
  LogoAssetSourceUrl = 'logo___asset___source___url',
  LogoAssetFixedBase64 = 'logo___asset___fixed___base64',
  LogoAssetFixedAspectRatio = 'logo___asset___fixed___aspectRatio',
  LogoAssetFixedWidth = 'logo___asset___fixed___width',
  LogoAssetFixedHeight = 'logo___asset___fixed___height',
  LogoAssetFixedSrc = 'logo___asset___fixed___src',
  LogoAssetFixedSrcSet = 'logo___asset___fixed___srcSet',
  LogoAssetFixedSrcWebp = 'logo___asset___fixed___srcWebp',
  LogoAssetFixedSrcSetWebp = 'logo___asset___fixed___srcSetWebp',
  LogoAssetFluidBase64 = 'logo___asset___fluid___base64',
  LogoAssetFluidAspectRatio = 'logo___asset___fluid___aspectRatio',
  LogoAssetFluidSrc = 'logo___asset___fluid___src',
  LogoAssetFluidSrcSet = 'logo___asset___fluid___srcSet',
  LogoAssetFluidSrcWebp = 'logo___asset___fluid___srcWebp',
  LogoAssetFluidSrcSetWebp = 'logo___asset___fluid___srcSetWebp',
  LogoAssetFluidSizes = 'logo___asset___fluid___sizes',
  LogoAssetRawMetadata = 'logo___asset____rawMetadata',
  LogoAssetRawSource = 'logo___asset____rawSource',
  LogoAssetId = 'logo___asset___id',
  LogoAssetParentId = 'logo___asset___parent___id',
  LogoAssetParentChildren = 'logo___asset___parent___children',
  LogoAssetChildren = 'logo___asset___children',
  LogoAssetChildrenId = 'logo___asset___children___id',
  LogoAssetChildrenChildren = 'logo___asset___children___children',
  LogoAssetInternalContent = 'logo___asset___internal___content',
  LogoAssetInternalContentDigest = 'logo___asset___internal___contentDigest',
  LogoAssetInternalDescription = 'logo___asset___internal___description',
  LogoAssetInternalFieldOwners = 'logo___asset___internal___fieldOwners',
  LogoAssetInternalIgnoreType = 'logo___asset___internal___ignoreType',
  LogoAssetInternalMediaType = 'logo___asset___internal___mediaType',
  LogoAssetInternalOwner = 'logo___asset___internal___owner',
  LogoAssetInternalType = 'logo___asset___internal___type',
  LogoHotspotKey = 'logo___hotspot____key',
  LogoHotspotType = 'logo___hotspot____type',
  LogoHotspotX = 'logo___hotspot___x',
  LogoHotspotY = 'logo___hotspot___y',
  LogoHotspotHeight = 'logo___hotspot___height',
  LogoHotspotWidth = 'logo___hotspot___width',
  LogoCropKey = 'logo___crop____key',
  LogoCropType = 'logo___crop____type',
  LogoCropTop = 'logo___crop___top',
  LogoCropBottom = 'logo___crop___bottom',
  LogoCropLeft = 'logo___crop___left',
  LogoCropRight = 'logo___crop___right',
  ColorKey = 'color____key',
  ColorType = 'color____type',
  ColorHex = 'color___hex',
  ColorAlpha = 'color___alpha',
  ColorHslKey = 'color___hsl____key',
  ColorHslType = 'color___hsl____type',
  ColorHslH = 'color___hsl___h',
  ColorHslS = 'color___hsl___s',
  ColorHslL = 'color___hsl___l',
  ColorHslA = 'color___hsl___a',
  ColorHsvKey = 'color___hsv____key',
  ColorHsvType = 'color___hsv____type',
  ColorHsvH = 'color___hsv___h',
  ColorHsvS = 'color___hsv___s',
  ColorHsvV = 'color___hsv___v',
  ColorHsvA = 'color___hsv___a',
  ColorRgbKey = 'color___rgb____key',
  ColorRgbType = 'color___rgb____type',
  ColorRgbR = 'color___rgb___r',
  ColorRgbG = 'color___rgb___g',
  ColorRgbB = 'color___rgb___b',
  ColorRgbA = 'color___rgb___a',
  RawDescription = '_rawDescription',
  RawIcon = '_rawIcon',
  RawLogo = '_rawLogo',
  RawColor = '_rawColor',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SanitySiteFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<SanityLocaleTextFilterInput>,
  icon?: Maybe<SanityFigureFilterInput>,
  logo?: Maybe<SanityFigureFilterInput>,
  color?: Maybe<SanityColorFilterInput>,
  _rawDescription?: Maybe<JsonQueryOperatorInput>,
  _rawIcon?: Maybe<JsonQueryOperatorInput>,
  _rawLogo?: Maybe<JsonQueryOperatorInput>,
  _rawColor?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanitySiteGroupConnection = {
   __typename?: 'SanitySiteGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanitySiteEdge>,
  nodes: Array<SanitySite>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanitySiteSortInput = {
  fields?: Maybe<Array<Maybe<SanitySiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanitySlug = {
   __typename?: 'SanitySlug',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  current?: Maybe<Scalars['String']>,
};

export type SanitySlugFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  current?: Maybe<StringQueryOperatorInput>,
};

export type SanitySpan = {
   __typename?: 'SanitySpan',
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  marks?: Maybe<Array<Maybe<Scalars['String']>>>,
  text?: Maybe<Scalars['String']>,
};

export type SanityUpgradable = SanityDocument & Node & {
   __typename?: 'SanityUpgradable',
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<SanitySlug>,
  vendor?: Maybe<Scalars['String']>,
  homepage?: Maybe<Scalars['String']>,
  description?: Maybe<SanityLocaleText>,
  icon?: Maybe<SanityFigure>,
  logo?: Maybe<SanityFigure>,
  color?: Maybe<SanityColor>,
  _rawSlug?: Maybe<Scalars['JSON']>,
  _rawDescription?: Maybe<Scalars['JSON']>,
  _rawIcon?: Maybe<Scalars['JSON']>,
  _rawLogo?: Maybe<Scalars['JSON']>,
  _rawColor?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityUpgradable_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityUpgradable_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityUpgradable_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityUpgradable_RawDescriptionArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityUpgradable_RawIconArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityUpgradable_RawLogoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityUpgradable_RawColorArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityUpgradableConnection = {
   __typename?: 'SanityUpgradableConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityUpgradableEdge>,
  nodes: Array<SanityUpgradable>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityUpgradableGroupConnection>,
};


export type SanityUpgradableConnectionDistinctArgs = {
  field: SanityUpgradableFieldsEnum
};


export type SanityUpgradableConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityUpgradableFieldsEnum
};

export type SanityUpgradableEdge = {
   __typename?: 'SanityUpgradableEdge',
  next?: Maybe<SanityUpgradable>,
  node: SanityUpgradable,
  previous?: Maybe<SanityUpgradable>,
};

export enum SanityUpgradableFieldsEnum {
  Id = '_id',
  Type = '_type',
  CreatedAt = '_createdAt',
  UpdatedAt = '_updatedAt',
  Rev = '_rev',
  Key = '_key',
  Category = 'category',
  Name = 'name',
  SlugKey = 'slug____key',
  SlugType = 'slug____type',
  SlugCurrent = 'slug___current',
  Vendor = 'vendor',
  Homepage = 'homepage',
  DescriptionKey = 'description____key',
  DescriptionType = 'description____type',
  DescriptionEn = 'description___en',
  DescriptionNl = 'description___nl',
  IconKey = 'icon____key',
  IconType = 'icon____type',
  IconAlt = 'icon___alt',
  IconAssetId = 'icon___asset____id',
  IconAssetType = 'icon___asset____type',
  IconAssetCreatedAt = 'icon___asset____createdAt',
  IconAssetUpdatedAt = 'icon___asset____updatedAt',
  IconAssetRev = 'icon___asset____rev',
  IconAssetKey = 'icon___asset____key',
  IconAssetOriginalFilename = 'icon___asset___originalFilename',
  IconAssetLabel = 'icon___asset___label',
  IconAssetTitle = 'icon___asset___title',
  IconAssetDescription = 'icon___asset___description',
  IconAssetSha1hash = 'icon___asset___sha1hash',
  IconAssetExtension = 'icon___asset___extension',
  IconAssetMimeType = 'icon___asset___mimeType',
  IconAssetSize = 'icon___asset___size',
  IconAssetAssetId = 'icon___asset___assetId',
  IconAssetPath = 'icon___asset___path',
  IconAssetUrl = 'icon___asset___url',
  IconAssetMetadataKey = 'icon___asset___metadata____key',
  IconAssetMetadataType = 'icon___asset___metadata____type',
  IconAssetMetadataLqip = 'icon___asset___metadata___lqip',
  IconAssetMetadataHasAlpha = 'icon___asset___metadata___hasAlpha',
  IconAssetMetadataIsOpaque = 'icon___asset___metadata___isOpaque',
  IconAssetSourceKey = 'icon___asset___source____key',
  IconAssetSourceType = 'icon___asset___source____type',
  IconAssetSourceName = 'icon___asset___source___name',
  IconAssetSourceSanityId = 'icon___asset___source___sanityId',
  IconAssetSourceUrl = 'icon___asset___source___url',
  IconAssetFixedBase64 = 'icon___asset___fixed___base64',
  IconAssetFixedAspectRatio = 'icon___asset___fixed___aspectRatio',
  IconAssetFixedWidth = 'icon___asset___fixed___width',
  IconAssetFixedHeight = 'icon___asset___fixed___height',
  IconAssetFixedSrc = 'icon___asset___fixed___src',
  IconAssetFixedSrcSet = 'icon___asset___fixed___srcSet',
  IconAssetFixedSrcWebp = 'icon___asset___fixed___srcWebp',
  IconAssetFixedSrcSetWebp = 'icon___asset___fixed___srcSetWebp',
  IconAssetFluidBase64 = 'icon___asset___fluid___base64',
  IconAssetFluidAspectRatio = 'icon___asset___fluid___aspectRatio',
  IconAssetFluidSrc = 'icon___asset___fluid___src',
  IconAssetFluidSrcSet = 'icon___asset___fluid___srcSet',
  IconAssetFluidSrcWebp = 'icon___asset___fluid___srcWebp',
  IconAssetFluidSrcSetWebp = 'icon___asset___fluid___srcSetWebp',
  IconAssetFluidSizes = 'icon___asset___fluid___sizes',
  IconAssetRawMetadata = 'icon___asset____rawMetadata',
  IconAssetRawSource = 'icon___asset____rawSource',
  IconAssetId = 'icon___asset___id',
  IconAssetParentId = 'icon___asset___parent___id',
  IconAssetParentChildren = 'icon___asset___parent___children',
  IconAssetChildren = 'icon___asset___children',
  IconAssetChildrenId = 'icon___asset___children___id',
  IconAssetChildrenChildren = 'icon___asset___children___children',
  IconAssetInternalContent = 'icon___asset___internal___content',
  IconAssetInternalContentDigest = 'icon___asset___internal___contentDigest',
  IconAssetInternalDescription = 'icon___asset___internal___description',
  IconAssetInternalFieldOwners = 'icon___asset___internal___fieldOwners',
  IconAssetInternalIgnoreType = 'icon___asset___internal___ignoreType',
  IconAssetInternalMediaType = 'icon___asset___internal___mediaType',
  IconAssetInternalOwner = 'icon___asset___internal___owner',
  IconAssetInternalType = 'icon___asset___internal___type',
  IconHotspotKey = 'icon___hotspot____key',
  IconHotspotType = 'icon___hotspot____type',
  IconHotspotX = 'icon___hotspot___x',
  IconHotspotY = 'icon___hotspot___y',
  IconHotspotHeight = 'icon___hotspot___height',
  IconHotspotWidth = 'icon___hotspot___width',
  IconCropKey = 'icon___crop____key',
  IconCropType = 'icon___crop____type',
  IconCropTop = 'icon___crop___top',
  IconCropBottom = 'icon___crop___bottom',
  IconCropLeft = 'icon___crop___left',
  IconCropRight = 'icon___crop___right',
  LogoKey = 'logo____key',
  LogoType = 'logo____type',
  LogoAlt = 'logo___alt',
  LogoAssetId = 'logo___asset____id',
  LogoAssetType = 'logo___asset____type',
  LogoAssetCreatedAt = 'logo___asset____createdAt',
  LogoAssetUpdatedAt = 'logo___asset____updatedAt',
  LogoAssetRev = 'logo___asset____rev',
  LogoAssetKey = 'logo___asset____key',
  LogoAssetOriginalFilename = 'logo___asset___originalFilename',
  LogoAssetLabel = 'logo___asset___label',
  LogoAssetTitle = 'logo___asset___title',
  LogoAssetDescription = 'logo___asset___description',
  LogoAssetSha1hash = 'logo___asset___sha1hash',
  LogoAssetExtension = 'logo___asset___extension',
  LogoAssetMimeType = 'logo___asset___mimeType',
  LogoAssetSize = 'logo___asset___size',
  LogoAssetAssetId = 'logo___asset___assetId',
  LogoAssetPath = 'logo___asset___path',
  LogoAssetUrl = 'logo___asset___url',
  LogoAssetMetadataKey = 'logo___asset___metadata____key',
  LogoAssetMetadataType = 'logo___asset___metadata____type',
  LogoAssetMetadataLqip = 'logo___asset___metadata___lqip',
  LogoAssetMetadataHasAlpha = 'logo___asset___metadata___hasAlpha',
  LogoAssetMetadataIsOpaque = 'logo___asset___metadata___isOpaque',
  LogoAssetSourceKey = 'logo___asset___source____key',
  LogoAssetSourceType = 'logo___asset___source____type',
  LogoAssetSourceName = 'logo___asset___source___name',
  LogoAssetSourceSanityId = 'logo___asset___source___sanityId',
  LogoAssetSourceUrl = 'logo___asset___source___url',
  LogoAssetFixedBase64 = 'logo___asset___fixed___base64',
  LogoAssetFixedAspectRatio = 'logo___asset___fixed___aspectRatio',
  LogoAssetFixedWidth = 'logo___asset___fixed___width',
  LogoAssetFixedHeight = 'logo___asset___fixed___height',
  LogoAssetFixedSrc = 'logo___asset___fixed___src',
  LogoAssetFixedSrcSet = 'logo___asset___fixed___srcSet',
  LogoAssetFixedSrcWebp = 'logo___asset___fixed___srcWebp',
  LogoAssetFixedSrcSetWebp = 'logo___asset___fixed___srcSetWebp',
  LogoAssetFluidBase64 = 'logo___asset___fluid___base64',
  LogoAssetFluidAspectRatio = 'logo___asset___fluid___aspectRatio',
  LogoAssetFluidSrc = 'logo___asset___fluid___src',
  LogoAssetFluidSrcSet = 'logo___asset___fluid___srcSet',
  LogoAssetFluidSrcWebp = 'logo___asset___fluid___srcWebp',
  LogoAssetFluidSrcSetWebp = 'logo___asset___fluid___srcSetWebp',
  LogoAssetFluidSizes = 'logo___asset___fluid___sizes',
  LogoAssetRawMetadata = 'logo___asset____rawMetadata',
  LogoAssetRawSource = 'logo___asset____rawSource',
  LogoAssetId = 'logo___asset___id',
  LogoAssetParentId = 'logo___asset___parent___id',
  LogoAssetParentChildren = 'logo___asset___parent___children',
  LogoAssetChildren = 'logo___asset___children',
  LogoAssetChildrenId = 'logo___asset___children___id',
  LogoAssetChildrenChildren = 'logo___asset___children___children',
  LogoAssetInternalContent = 'logo___asset___internal___content',
  LogoAssetInternalContentDigest = 'logo___asset___internal___contentDigest',
  LogoAssetInternalDescription = 'logo___asset___internal___description',
  LogoAssetInternalFieldOwners = 'logo___asset___internal___fieldOwners',
  LogoAssetInternalIgnoreType = 'logo___asset___internal___ignoreType',
  LogoAssetInternalMediaType = 'logo___asset___internal___mediaType',
  LogoAssetInternalOwner = 'logo___asset___internal___owner',
  LogoAssetInternalType = 'logo___asset___internal___type',
  LogoHotspotKey = 'logo___hotspot____key',
  LogoHotspotType = 'logo___hotspot____type',
  LogoHotspotX = 'logo___hotspot___x',
  LogoHotspotY = 'logo___hotspot___y',
  LogoHotspotHeight = 'logo___hotspot___height',
  LogoHotspotWidth = 'logo___hotspot___width',
  LogoCropKey = 'logo___crop____key',
  LogoCropType = 'logo___crop____type',
  LogoCropTop = 'logo___crop___top',
  LogoCropBottom = 'logo___crop___bottom',
  LogoCropLeft = 'logo___crop___left',
  LogoCropRight = 'logo___crop___right',
  ColorKey = 'color____key',
  ColorType = 'color____type',
  ColorHex = 'color___hex',
  ColorAlpha = 'color___alpha',
  ColorHslKey = 'color___hsl____key',
  ColorHslType = 'color___hsl____type',
  ColorHslH = 'color___hsl___h',
  ColorHslS = 'color___hsl___s',
  ColorHslL = 'color___hsl___l',
  ColorHslA = 'color___hsl___a',
  ColorHsvKey = 'color___hsv____key',
  ColorHsvType = 'color___hsv____type',
  ColorHsvH = 'color___hsv___h',
  ColorHsvS = 'color___hsv___s',
  ColorHsvV = 'color___hsv___v',
  ColorHsvA = 'color___hsv___a',
  ColorRgbKey = 'color___rgb____key',
  ColorRgbType = 'color___rgb____type',
  ColorRgbR = 'color___rgb___r',
  ColorRgbG = 'color___rgb___g',
  ColorRgbB = 'color___rgb___b',
  ColorRgbA = 'color___rgb___a',
  RawSlug = '_rawSlug',
  RawDescription = '_rawDescription',
  RawIcon = '_rawIcon',
  RawLogo = '_rawLogo',
  RawColor = '_rawColor',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SanityUpgradableFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  category?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  vendor?: Maybe<StringQueryOperatorInput>,
  homepage?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<SanityLocaleTextFilterInput>,
  icon?: Maybe<SanityFigureFilterInput>,
  logo?: Maybe<SanityFigureFilterInput>,
  color?: Maybe<SanityColorFilterInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawDescription?: Maybe<JsonQueryOperatorInput>,
  _rawIcon?: Maybe<JsonQueryOperatorInput>,
  _rawLogo?: Maybe<JsonQueryOperatorInput>,
  _rawColor?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityUpgradableGroupConnection = {
   __typename?: 'SanityUpgradableGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SanityUpgradableEdge>,
  nodes: Array<SanityUpgradable>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityUpgradableSortInput = {
  fields?: Maybe<Array<Maybe<SanityUpgradableFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Site = Node & {
   __typename?: 'Site',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
   __typename?: 'SiteConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
   __typename?: 'SiteEdge',
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime'
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
   __typename?: 'SiteGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
   __typename?: 'SitePage',
  path: Scalars['String'],
  component: Scalars['String'],
  internalComponentName: Scalars['String'],
  componentChunkName: Scalars['String'],
  matchPath?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
   __typename?: 'SitePageConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageEdge = {
   __typename?: 'SitePageEdge',
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsProjectId = 'pluginCreator___pluginOptions___projectId',
  PluginCreatorPluginOptionsDataset = 'pluginCreator___pluginOptions___dataset',
  PluginCreatorPluginOptionsToken = 'pluginCreator___pluginOptions___token',
  PluginCreatorPluginOptionsWatchMode = 'pluginCreator___pluginOptions___watchMode',
  PluginCreatorPluginOptionsOverlayDrafts = 'pluginCreator___pluginOptions___overlayDrafts',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  matchPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
   __typename?: 'SitePageGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
   __typename?: 'SitePlugin',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
   __typename?: 'SitePluginConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
   __typename?: 'SitePluginEdge',
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsProjectId = 'pluginOptions___projectId',
  PluginOptionsDataset = 'pluginOptions___dataset',
  PluginOptionsToken = 'pluginOptions___token',
  PluginOptionsWatchMode = 'pluginOptions___watchMode',
  PluginOptionsOverlayDrafts = 'pluginOptions___overlayDrafts',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
   __typename?: 'SitePluginGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
   __typename?: 'SitePluginPackageJson',
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
   __typename?: 'SitePluginPackageJsonDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
   __typename?: 'SitePluginPackageJsonDevDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
   __typename?: 'SitePluginPackageJsonPeerDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
   __typename?: 'SitePluginPluginOptions',
  projectId?: Maybe<Scalars['String']>,
  dataset?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
  watchMode?: Maybe<Scalars['Boolean']>,
  overlayDrafts?: Maybe<Scalars['Boolean']>,
  path?: Maybe<Scalars['String']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  projectId?: Maybe<StringQueryOperatorInput>,
  dataset?: Maybe<StringQueryOperatorInput>,
  token?: Maybe<StringQueryOperatorInput>,
  watchMode?: Maybe<BooleanQueryOperatorInput>,
  overlayDrafts?: Maybe<BooleanQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};
