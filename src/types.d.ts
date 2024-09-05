declare interface Repo {
    id: number
    name: string
    description: string | null
    html_url: string
    created_at: string
    updated_at: string
    pushed_at: string
    language: string | null
    size: number
    stargazers_count: number
    forks_count: number
    watchers_count: number
    default_branch: string
    open_issues_count: number
    fork: boolean
    owner: {
        login: string
        id: number
        avatar_url: string
        url: string
    }
}

declare interface VercelDeployment {
    alias: string[]
    aliasAssigned: number
    aliasError: string | null
    automaticAliases: string[]
    builds: any[]
    createdAt: number
    createdIn: string
    creator: {
        uid: string
        email: string
        username: string
    }
    deploymentHostname: string
    forced: boolean
    id: string
    meta: {
        githubCommitAuthorName: string
        githubCommitMessage: string
        githubCommitOrg: string
        githubCommitRef: string
        githubCommitRepo: string
        githubCommitSha: string
        githubDeployment: string
        githubOrg: string
        githubRepo: string
    }
    name: string
    plan: string
    private: boolean
    readyState: string
    readySubstate: string
    target: string
    teamId: string
    type: string
    url: string
    userId: string
    withCache: boolean
    buildingAt: number
    readyAt: number
    previewCommentsEnabled: boolean
}

declare interface VercelProject {
    accountId: string
    speedInsights: {
        id: string
        hasData: boolean
    }
    autoExposeSystemEnvs: boolean
    autoAssignCustomDomains: boolean
    autoAssignCustomDomainsUpdatedBy: string
    buildCommand: string | null
    commandForIgnoringBuildStep: string | null
    createdAt: number
    crons: {
        enabledAt: number
        disabledAt: number | null
        updatedAt: number
        deploymentId: string
        definitions: any[]
    }
    devCommand: string | null
    directoryListing: boolean
    framework: string
    gitForkProtection: boolean
    gitLFS: boolean
    id: string
    installCommand: string | null
    lastRollbackTarget: string | null
    lastAliasRequest: string | null
    name: string
    nodeVersion: string
    outputDirectory: string | null
    publicSource: boolean
    rootDirectory: string | null
    serverlessFunctionRegion: string
    sourceFilesOutsideRootDirectory: boolean
    ssoProtection: {
        deploymentType: string
    }
    updatedAt: number
    gitComments: {
        onCommit: boolean
        onPullRequest: boolean
    }
    webAnalytics: {
        id: string
    }
    latestDeployments: VercelDeployment[]
}

declare interface VercelProjects {
    projects: VercelProject[]
}
