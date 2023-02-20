import { gql, type DocumentNode } from "apollo-boost";

type QueryCreator<T> = (config?: T) => DocumentNode;

interface ListReposProps {
  userLogin: "octocat" | string;
  showFirst: 5 | number;
}

interface ListReposIssuesProps {
  userLogin: "octocat" | string;
  showFirst: 5 | number;
  repositoryName: string;
}

// Получить список репозиториев 'octocat'
export const SEARCH_REPO: QueryCreator<Partial<ListReposProps>> = (props) => {
  const defaultProps: ListReposProps = {
    userLogin: "octocat",
    showFirst: 5,
  };

  let currentProps: ListReposProps = defaultProps;

  if (props) currentProps = { ...defaultProps, ...props };

  return gql`
  query searchRepos {
    search(query: "${currentProps.userLogin}", type: USER, first: ${currentProps.showFirst}) {
    edges {
      node {
        ... on User {
          id
          email
          login
        }
      }
    }
  }
}
`;
};

// Получить список репозиториев 'octocat'
export const LIST_OF_REPOS: QueryCreator<Partial<ListReposProps>> = (props) => {
  const defaultProps: ListReposProps = {
    userLogin: "octocat",
    showFirst: 5,
  };

  let currentProps: ListReposProps = defaultProps;

  if (props) currentProps = { ...defaultProps, ...props };

  return gql`
  query GetCommentUssueOctocatByRepos {
    user(login: "${currentProps.userLogin}") {
      id
      login
      name
      repositories(first: ${currentProps.showFirst}) {
        totalCount
        nodes {
          id
          name
        }
      }
    }
  }
`;
};

// Получить список проблем репозитория пользователя 'octocat'
export const LIST_OF_ISSUES_BY_REPOS: QueryCreator<
  Partial<ListReposIssuesProps>
> = (props) => {
  const defaultProps: ListReposIssuesProps = {
    userLogin: "octocat",
    showFirst: 5,
    repositoryName: "Hello-World",
  };

  let currentProps: ListReposIssuesProps = defaultProps;

  if (props) currentProps = { ...defaultProps, ...props };

  //   return gql`
  //     query GetUssiesOctocatByRepos {
  //     user(login: "${currentProps.userLogin}") {
  //       repository(name: "${currentProps.repositoryName}") {
  //         issues(last: ${currentProps.showFirst}) {
  //           nodes {
  //             state
  //             id
  //             title
  //             bodyText
  //           }
  //         }
  //       }
  //     }
  //   }
  // `;

  return gql`
    query GetUssiesOctocatByRepos {
      user(login: "octocat") {
        repository(name: "Hello-World") {
          issues(last: 5) {
            nodes {
              state
              id
              title
              bodyText
            }
          }
        }
      }
    }
  `;
};

// Получить список проблем репозитория пользователя 'octocat'
export const LIST_OF_COMMENTS_ISSUES_BY_REPOS: QueryCreator<
  Partial<ListReposIssuesProps>
> = (props) => {
  const defaultProps: ListReposIssuesProps = {
    userLogin: "octocat",
    showFirst: 5,
    repositoryName: "Hello-World",
  };

  let currentProps: ListReposIssuesProps = defaultProps;

  if (props) currentProps = { ...defaultProps, ...props };
  return gql`
  query GetCommentUssueOctocatByRepos {
    user(login: "${currentProps.userLogin}") {
      repository(name: "${currentProps.repositoryName}") {
        issues(last: 1) {
          nodes {
            comments(last: 5) {
              totalCount
              nodes {
                bodyText
                id
                createdAt
              }
            }
          }
        }
      }
    }
  }
`;
};

// Получить список проблем репозитория пользователя 'octocat'
export const GET_ALL: QueryCreator<Partial<ListReposIssuesProps>> = (props) => {
  const defaultProps: ListReposIssuesProps = {
    userLogin: "octocat",
    showFirst: 5,
    repositoryName: "Hello-World",
  };

  let currentProps: ListReposIssuesProps = defaultProps;

  if (props) currentProps = { ...defaultProps, ...props };
  return gql`
    {
      search(query: "octocat", type: USER, last: 18) {
        nodes {
          ... on User {
            id
            email
            name
            login
            repositories(last: 18) {
              nodes {
                id
                name
                issues(last: 18) {
                  nodes {
                    bodyText
                    id
                    state
                    title
                    comments(last: 18) {
                      totalCount
                      nodes {
                        bodyText
                        author {
                          login
                        }
                        id
                      }
                    }
                  }
                  totalCount
                }
              }
              totalCount
            }
          }
        }
      }
    }
  `;
};
