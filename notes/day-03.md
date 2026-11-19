# Day 3 – 12 Nov 2026
## Git & GitHub
- Branch: a separate line of work, so main stays safe.
- Commit: a saved snapshot of changes with a message.
- Pull request (PR): asking to merge a branch into main; others can review it first.
- Merge: adding the branch's changes into main.
- .gitignore: files Git must never upload, like .env with API keys.

## Learned
1. Git flow: git add → git commit → git push. Always pull (Sync) before starting work, so you don't get conflicts.
2. Never change main directly: branch → commit → PR → merge, then delete the branch.
3. JS objects are key-value pairs. Destructuring pulls fields out (const { name, email } = user). JSON is the text format APIs send; JSON.parse() turns it into an object, JSON.stringify() turns it back.

## Open question
- If two people change the same line on different branches, how do you fix the merge conflict?
