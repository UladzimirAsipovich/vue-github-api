/** Deprecated */
export interface T_Repository {
  id: number;
  name: string;
  login: string;
  email: string;
}

/** Deprecated */
export interface I_SelectedUser {
  email: string;
  id: string;
  login: string;
}

/** Deprecated */
export interface I_SelectedIssue {
  bodyText: string;
  id: string;
  state: string;
  title: string;
}

/** Deprecated */
export interface I_SelectedComment {
  bodyText: string;
  id: string;
  createdAt: string;
}

/** Deprecated */
export interface I_UnionPops {
  id: string | number;
  bodyText: string;
  email: string;
  login: string;
  title: string;
  state: string;
  name: string;
}

export type T_UnionCardPops = Partial<I_UnionPops>;

export type T_Repositories = T_Repository[];

export type T_SearchStatusAsData = null | T_Repositories | -1;

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

export interface I_INITIAL_USER {
  id: string;
  email: string;
  name: string | null;
  login: string;
  repositories: {
    nodes: I_INITIAL_REPO[] | [];
    totalCount: number;
  };
}

export interface I_INITIAL_REPO {
  id: string;
  name: string;
  issues: {
    nodes: I_INITIAL_ISSUE[] | [];
    totalCount: number;
  };
}

export interface I_INITIAL_ISSUE {
  bodyText: string;
  id: string;
  state: string;
  title: string;
  comments: {
    totalCount: number;
    nodes: I_INITIAL_COMMENT[] | [];
  };
}

export interface I_INITIAL_COMMENT {
  bodyText: string;
  author: { login: string } | null;
  id: string;
}

/** Объединение от типов USER, REPO, ISSUE, COMMENT - только для repoCard.vue */
export interface I_ONLY_FOR_CARD_REPO_COMPONENT {
  id: string;
  email: string;
  name: string | null;
  login: string;
  bodyText: string;
  state: string;
  title: string;
  author: { login: string } | null;
  repositories: {
    nodes: I_INITIAL_REPO[];
    totalCount: number;
  };
  issues: {
    nodes: I_INITIAL_ISSUE[];
    totalCount: number;
  };
  comments: {
    totalCount: number;
    nodes: I_INITIAL_COMMENT[];
  };
}

export type T_INITIAL_DATA = I_INITIAL_USER[];
