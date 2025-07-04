
<br>

# 📚 Project & Portfolio

* **Research Workflow Notes - Milestone 1**
* **Zachary Taylor**
* **Assignment Due Date: 08/11/24**

<br>

## Git Workflow

This document contains general notes related to Git Workflows. A Git Workflow can be used as a guideline that will demonstrate the various steps taken to contribute your work to a project.

<br>

## Centralized Workflow

One central repository with a "master" or "main" branch where developers can push changes. One branch allows a developer to make changes without managing a number of branches.

* Centralized Workflow has no PRs or forking patterns
* Single point-of-entry for all changes
* Isolated environment allows developer to work independently

<br>

## Feature Branch Workflow

The main purpose of the Feature Branch Workflow, every feature has a dedicated branch for feature isolation. Allows a feature to be worked on by a team of developers while the main branch will have clean code.  

* Central repository, main branch keeps track of project history
* Create new branch every time a new feature is being worked on
* PRs are used by developers to add a new feature
* Feature branches have descriptive names
* Store several feature branches on a central repository
  
<br>

## Gitflow Workflow

Gitflow is an alternative branching model that are made up of Feature branches and several primary branches. Developers create a feature and delay the merging to main until the feature is complete.

* Branches have specific rules and defines when they should interact
* 2 branches to record history: 'main' stores release history and 'develop' branch acts as the integration branch for feature
* A feature should be within its own branch.
* Developer branch is the parent to the feature branch

```bash
git flow init
```

<br>

## Reference Links

Use this section to highlight your own independent research. Replace the example references below with your own links and recommended resources. For example...

**Resource 1: Feature Branch workflow**  
[Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow): Using it within this file

**Resource 2: Comparing Git Workflows: What you should know**
[Comparing Git workflows: What you should know](https://www.atlassian.com/git/tutorials/comparing-workflows): This site compares over a few of the Git Workflows

**Resource 3: Git Workflow and Best Practices**
[Git Workflow and Best Practices](https://github.com/Piwigo/Piwigo/wiki/Git-workflow-and-best-pratices): The workflow is based on Git but with the following branches master, release branches, bug, feature, and translation. This article shares some tips on keeping a clean Git History.

#### No fast-forward

Git's default behavior is fast-forward and that means if the targeted branch doesn't have any changes, the source branch will dissapear from the tree, and that makes it hard to localize merging points. A way to solve is to add `--no-ff` option to `git merge` which in turn will force Git to create a technical.

![No fast-forward Visual](https://user-images.githubusercontent.com/9326959/236259756-a66dbc52-397f-42a3-8bc9-f8dc3122ad51.png)

<br>

**Note:**  

* It is acceptable to provide multiple links for a single sub-topic.  
* Be sure to explain what resource(s) you found most helpful for the current milestone.
