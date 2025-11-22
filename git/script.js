// Detailed explanations for each command
const commandInfo = {
    // ====================
    // CONFIGURATION
    // ====================
    "git config --global user.name \"Your Name\"": "Sets your name in Git. This name will show up in the history of changes you make. Everyone will see this name when they look at who made each change.",
    
    "git config --global user.email \"email@example.com\"": "Sets your email in Git. Use the same email you use for GitHub. This links your changes to your GitHub account.",
    
    "git config --list": "Shows all your Git settings. Use this to check if your name and email are set up correctly.",
    
    "git config --global init.defaultBranch main": "Changes the name of your first branch from 'master' to 'main'. GitHub now uses 'main' as the standard name, so this makes things match.",

    // ====================
    // STARTING A PROJECT
    // ====================
    "git init": "Turns your current folder into a Git project. This creates a hidden .git folder that tracks all your changes. Use this when starting version control for the first time.",
    
    "git clone <url>": "Downloads a complete copy of a project from the internet (like GitHub). You get all the files, history, and branches. This creates a new folder on your computer.",
    
    "git clone <url> <directory>": "Same as clone, but you choose what to name the folder instead of using the default project name.",

    // ====================
    // BASIC WORKFLOW
    // ====================
    "git status": "Shows what has changed in your project. It tells you which files are modified, which are ready to save, and which are new. Check this before making any commit.",
    
    "git add <file>": "Marks a specific file to be included in your next save (commit). This is called 'staging'. You can choose exactly which files to save.",
    
    "git add .": "Marks ALL changed files in your current folder to be saved. Quick and convenient, but be careful you don't include files you didn't mean to.",
    
    "git commit -m \"message\"": "Saves all your staged changes as a snapshot in history. The message should explain what you changed and why. Think of this as a save point in a video game.",
    
    "git commit -am \"message\"": "Stages and saves all modified files in one command. Warning: This does NOT include brand new files, only files Git already knows about.",
    
    "git log": "Shows the complete history of all saves (commits) in your project. You'll see who made each change, when, and their message explaining why.",
    
    "git log --oneline": "Shows history in a short format - one line per commit. Much easier to scan quickly than the full log.",
    
    "git diff": "Shows exactly what changed in your files, line by line. Use this before staging to review what you actually modified.",

    // ====================
    // UNDOING CHANGES
    // ====================
    "git checkout -- filename": "Throws away your changes to a file and restores it to the last saved version. Warning: You can't undo this! Note: This is old syntax - 'git restore' is better.",
    
    "git restore <file>": "Newer and safer way to discard changes to a file. Restores it to the last saved version. Easier to use than checkout because it only does one thing.",
    
    "git reset --soft HEAD~1": "Moves back one commit but keeps all your changes staged and ready to commit again. Use this when you want to rewrite your last commit message or add more changes to it.",
    
    "git reset --mixed HEAD~1": "Moves back one commit and unstages your changes, but keeps them in your files. This is the default if you just type 'git reset'. Use this when you committed too early and want to make more changes first.",
    
    "git reset --hard HEAD~1": "Moves back one commit and completely deletes all changes. This is permanent and dangerous! Only use when you're absolutely sure you want to throw away work. You can sometimes recover using 'git reflog'.",
    
    "git revert <commit-hash>": "Creates a new commit that undoes an old commit. This is the safe way to undo changes because it doesn't erase history. Use this on shared branches where others are working.",

    // ====================
    // BRANCHES
    // ====================
    "git branch": "Lists all your branches. The one with an asterisk (*) is the branch you're currently on. Branches let you work on different features without affecting the main code.",
    
    "git branch <branch-name>": "Creates a new branch but doesn't switch to it yet. You stay on your current branch. Think of this as creating a new timeline for your project.",
    
    "git checkout <branch-name>": "Switches to a different branch. All your files change to match that branch. Old command - modern Git recommends 'git switch' instead.",
    
    "git checkout -b <branch-name>": "Creates a new branch and immediately switches to it. One command instead of two. Note: 'git switch -c' is the newer way to do this.",
    
    "git switch <branch-name>": "Modern way to switch branches. Clearer and safer than 'git checkout' because it only switches branches and nothing else.",
    
    "git switch -c <branch-name>": "Modern way to create and switch to a new branch in one command. This is now the recommended method for starting new work.",
    
    "git branch -d <branch-name>": "Safely deletes a branch, but only if its changes have been merged. Git protects you from accidentally losing unmerged work.",
    
    "git branch -D <branch-name>": "Force deletes a branch even if it has unmerged changes. Dangerous! Use only when you're sure you want to throw away that work.",

    // ====================
    // MERGING & REBASING
    // ====================
    "git merge <branch-name>": "Combines another branch into your current branch. Brings all the commits from that branch into yours. May create merge conflicts that you need to fix manually.",
    
    "git merge --no-ff <branch-name>": "Merges a branch but always creates a merge commit, even when it's not technically needed. This keeps a clear record that a feature branch existed.",
    
    "git merge --squash <branch-name>": "Combines all commits from another branch into one single change, but doesn't commit it yet. Great for cleaning up messy history before merging. You need to commit after this.",
    
    "git rebase <branch-name>": "Rewrites history by moving your commits to start from the tip of another branch. Creates cleaner, linear history. Warning: Never use this on branches you've already shared with others!",
    
    "git rebase -i HEAD~n": "Interactive rebase - lets you edit, reorder, combine, or delete your recent commits. Powerful tool for cleaning up history before sharing. Replace 'n' with how many commits back you want to edit.",

    // ====================
    // REMOTES (GitHub, etc.)
    // ====================
    "git remote": "Lists the remote servers your project is connected to. Usually you'll see 'origin' which is the main remote, typically GitHub.",
    
    "git remote -v": "Shows all remote servers with their full URLs. The 'v' means verbose. Use this to see exactly where your code will be pushed or pulled from.",
    
    "git remote add origin <url>": "Connects your local project to a remote server (like GitHub). 'origin' is just a nickname for that server. You need this before you can push code online.",
    
    "git remote remove <name>": "Disconnects a remote server from your project. Use this if you need to change where your code is stored online.",
    
    "git remote rename <old> <new>": "Changes the nickname of a remote server. The URL stays the same, just the name changes.",

    // ====================
    // SYNCING WITH REMOTE
    // ====================
    "git fetch": "Downloads new changes from the remote server but doesn't change your files. Completely safe to run anytime. Good for checking what others have done before merging their work.",
    
    "git pull": "Downloads changes from the remote server AND automatically merges them into your current branch. Quick and easy but can create extra merge commits.",
    
    "git pull --rebase": "Downloads changes and puts your commits on top of them, creating cleaner history. Better for feature branches. Don't use this if others are also working on the same branch.",
    
    "git push": "Uploads your commits to the remote server. If someone else pushed first, you'll need to pull their changes before you can push yours.",
    
    "git push -u origin <branch>": "Uploads your branch for the first time and sets up tracking. After this, you can just type 'git push' without specifying where. The '-u' means 'set upstream'.",
    
    "git push --force-with-lease": "Overwrites remote history, but only if no one else made changes you don't know about. Safer than regular force push. Use after rebasing a personal branch.",

    // Additional common variations
    "git pull origin main": "Updates your current branch with changes from the remote 'main' branch. Equivalent to fetch then merge.",
    
    "git push origin": "Pushes to the remote server using your current branch name.",
    
    "git fetch --all": "Downloads updates from all connected remote servers.",
    
    "git push --force": "Forcefully overwrites remote history, ignoring any conflicts. Very dangerous! Can delete other people's work. Almost always use '--force-with-lease' instead.",

    // ====================
    // STASHING (Temporary Save)
    // ====================
    "git stash": "Temporarily saves your uncommitted changes and cleans your working directory. Use this when you need to switch tasks quickly but aren't ready to commit. Like putting your work in a drawer.",
    
    "git stash push -m \"message\"": "Same as stash but with a descriptive label. Helpful when you have multiple stashes and need to remember what each one contains.",
    
    "git stash list": "Shows all your saved stashes. Each one has a number like stash@{0}, stash@{1}, etc. The most recent is always stash@{0}.",
    
    "git stash pop": "Brings back your most recent stash and removes it from the stash list. May cause conflicts if you've changed the same files since stashing.",
    
    "git stash apply stash@{n}": "Brings back a specific stash but keeps it in the list. Use this when you want to apply the same changes to multiple branches.",
    
    "git stash drop stash@{n}": "Permanently deletes a stash. Use after you've confirmed you don't need those changes anymore.",

    // ====================
    // ADVANCED TOOLS
    // ====================
    "git cherry-pick <commit-hash>": "Copies a single commit from another branch onto your current branch. Useful for bringing one specific fix without merging everything. May require fixing conflicts.",
    
    "git bisect start": "Starts a binary search to find which commit introduced a bug. Git automatically checks out commits halfway through history until you find the bad one.",
    
    "git bisect": "Works with 'git bisect good' and 'git bisect bad' to help Git narrow down the problematic commit. Great for debugging large projects.",
    
    "git blame <file>": "Shows who last changed each line in a file and when. Use this to find out when a line was added or who might know about specific code.",
    
    "git reflog": "Shows every change to HEAD, including deleted commits. This is your safety net! If you accidentally deleted commits with reset or rebase, reflog can help you find and recover them.",
    
    "git clean -fd": "Permanently deletes all untracked files and folders. Cannot be undone! Always run 'git clean -n' first to preview what will be deleted.",

    // ====================
    // RECOVERY & DISASTER HELP
    // ====================
    "git reset --hard <commit-hash>": "Resets everything (files, staging, and history) to a specific commit. Deletes all newer changes permanently. Only use when certain. Can recover using reflog if needed.",
    
    "git checkout <commit-hash> -- <file>": "Restores a single file from a specific old commit without affecting other files. Good for recovering an old version of one file.",
    
    "git fsck --lost-found": "Scans for corrupted or lost data in your Git repository. Last resort tool for when things go seriously wrong. Tries to recover orphaned commits.",
    
    "git reset --hard": "Resets everything to match the last commit, deleting all uncommitted work. Permanent and dangerous! Make absolutely sure you don't need anything first.",
    
    "git restore .": "Discards all changes in tracked files, restoring them to the last commit. Safer than reset. Doesn't affect history.",
    
    "git clean -n": "Shows what files would be deleted by 'git clean -fd' without actually deleting them. Always run this first as a safety check!",

    // ====================
    // TAGGING (Versions/Releases)
    // ====================
    "git tag": "Lists all tags in the repository. Tags mark important points like version releases (v1.0.0, v2.0.0, etc.).",
    
    "git tag -a v1.0.0 -m \"Version 1.0.0\"": "Creates an annotated tag marking this commit as a release. Includes your name, date, and message. Use for official version releases.",
    
    "git push origin --tags": "Uploads all your tags to the remote server. Tags don't get pushed automatically with regular commits, so you need this command.",
    
    "git tag -a": "Creates an annotated tag (the recommended type) with metadata like author and date. Better than lightweight tags for releases.",
    
    "git tag -d <tag>": "Deletes a tag from your local repository. Use when you tagged the wrong commit or need to fix a version number.",
    
    "git push origin :refs/tags/<tag>": "Deletes a tag from the remote server. Useful for removing mistaken releases. Local tag must be deleted separately.",
    
    "git describe": "Shows a human-readable name based on the nearest tag. Like 'v1.0.0-5-gfc123ab' means 5 commits after v1.0.0. Used in automated builds.",
    
    "git rev-list --tags --max-count=1": "Finds the most recent tag in history. Often used in scripts to auto-generate version numbers.",
    
    "git log --decorate --graph --all": "Shows full history with a visual graph of branches and all tags labeled. Great for understanding project structure and releases.",
    "git log --pretty=format:\"%h %s\" --graph": "Shows commit history in a compact format with visual branch structure. Each commit is one line with short ID and message. Perfect for seeing how branches merged.",
    
    "git shortlog -sn": "Shows how many commits each person made, sorted by count. Good for seeing who contributes most to a project.",

    // ====================
    // GITHUB CLI (gh commands)
    // ====================
    "gh repo create <name>": "Creates a new repository on GitHub directly from the command line. You can choose public/private, add a README, and more. Faster than using the website.",
    
    "gh repo clone <user/repo>": "Clones a GitHub repository with automatic authentication setup. Better than 'git clone' for private repos because it handles credentials automatically.",
    
    "gh pr create": "Creates a Pull Request from the command line. You can set title, description, reviewers, and labels without opening a browser. Great for workflow automation.",
    
    "gh pr list": "Shows all open Pull Requests with numbers, titles, and authors. Helps you track code reviews directly from terminal.",
    
    "gh pr checkout <number>": "Downloads and switches to the code from a Pull Request. Makes it easy to test someone else's changes locally before approving.",
    
    "gh issue create": "Creates a new GitHub Issue from the terminal. You can add title, description, labels, and assign people. No browser needed.",
    
    "gh auth login": "Logs you into GitHub through the command line. You'll choose between HTTPS or SSH. Required before using other 'gh' commands.",
    
    "gh pr close": "Closes a Pull Request from the terminal. Same as closing it on GitHub's website but faster.",

    // ====================
    // SSH SETUP FOR GITHUB
    // ====================
    "ssh-keygen -t ed25519 -C \"email@example.com\"": "Creates a new SSH key pair for secure authentication. The email helps you remember which key is which. You'll need this for passwordless GitHub access.",
    
    "eval \"$(ssh-agent -s)\"": "Starts the SSH agent which securely stores your keys in memory. This lets you use SSH keys without typing the password every time.",
    
    "ssh-add ~/.ssh/id_ed25519": "Adds your private SSH key to the agent. After this, GitHub will recognize you automatically without asking for passwords.",
    
    "cat ~/.ssh/id_ed25519.pub": "Displays your public key so you can copy and paste it into GitHub settings. Only share the public key - NEVER share the private key!",
    
    "ssh -T git@github.com": "Tests if your SSH connection to GitHub is working. If successful, you'll see a welcome message from GitHub.",
    
    "ssh-add -l": "Lists all SSH keys currently loaded in the agent. Good for checking if the right key is active.",

    // ====================
    // COMPLETE WORKFLOWS
    // ====================
    
    // Starting a new project from scratch
    "git init": "Step 1: Turn your folder into a Git repository. This enables version control for your project.",
    "git add .": "Step 2: Stage all files for the first commit. Everything in your project will be tracked.",
    "git commit -m \"Initial commit\"": "Step 3: Create the first snapshot of your project. This is the starting point of your project's history.",
    "git branch -M main": "Step 4: Rename your branch to 'main' to match GitHub's standard naming.",
    "git remote add origin <repository-url>": "Step 5: Connect your local project to GitHub. Replace <repository-url> with your actual GitHub repo URL.",
    "git push -u origin main": "Step 6: Upload your code to GitHub for the first time. The -u sets up tracking for future pushes.",
    
    // Cloning and contributing
    "git clone <repository-url>": "Step 1: Download a project from GitHub to your computer. Creates a complete working copy.",
    "cd <repository-name>": "Step 2: Enter the project folder. You need to be inside the folder to use Git commands.",
    "git checkout -b feature-branch": "Step 3: Create and switch to a new branch for your changes. Keeps main branch clean.",
    "# Make your changes": "Step 4: Edit files in your code editor. Add features, fix bugs, update documentation, etc.",
    "git add . && git commit -m \"Add feature\"": "Step 5: Save your changes with a descriptive message explaining what you did.",
    "git push -u origin feature-branch": "Step 6: Upload your branch to GitHub so others can see and review your work.",
    
    // Feature branch workflow
    "git pull origin main": "Step 1: Get the latest changes from main branch before starting. Ensures you're working with current code.",
    "git checkout -b feature/new-feature": "Step 2: Create a new branch for your feature. Use descriptive names like 'feature/login-page'.",
    "# Work on feature": "Step 3: Write your code, test it, and make sure everything works correctly.",
    "git add . && git commit -m \"Implement feature\"": "Step 4: Save your work with a clear message. Make small commits for each logical change.",
    "git push -u origin feature/new-feature": "Step 5: Push your branch to GitHub so others can review it.",
    "# Create Pull Request on GitHub": "Step 6: Open GitHub in browser and create a Pull Request. This asks to merge your changes into main.",
    "git checkout main && git pull": "Step 7: After PR is approved and merged, switch back to main and update it with the merged changes.",
    "git branch -d feature/new-feature": "Step 8: Delete your feature branch locally since it's now merged. Keeps your branch list clean."
};

// ==============================
// COPY BUTTON FUNCTIONALITY
// ==============================
function copyToClipboard(button) {
    const card = button.closest('.command-card, .workflow-step');
    const commandElement = card.querySelector('.command');
    const commandText = commandElement.textContent.trim();

    navigator.clipboard.writeText(commandText).then(() => {
        const originalText = button.textContent;
        button.textContent = '✓ Copied!';
        button.classList.add('copied');

        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        button.textContent = '✗ Failed';
        
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
}

document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        copyToClipboard(this);
    });
});


// ==============================
// NAVIGATION & MENU
// ==============================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

function toggleNav() {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('show');
}

hamburger.addEventListener('click', toggleNav);

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        if (window.innerWidth <= 768) {
            navMenu.classList.remove('show');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});


// ==============================
// SECTION FADE-IN ANIMATION
// ==============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});


// ==============================
// SPARKLE EFFECT ON CARD HOVER
// ==============================
function createSparkle(card) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.top = Math.random() * card.offsetHeight + 'px';
    sparkle.style.left = Math.random() * card.offsetWidth + 'px';
    
    card.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 600);
}

document.querySelectorAll('.command-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => createSparkle(this), i * 100);
        }
    });
});


// ==============================
// CLICK OUTSIDE MENU CLOSE
// ==============================
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('show');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    }
});


// ==============================
// ESC HANDLING FOR MENU
// ==============================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
    }
});


// ==============================
// INFO PANEL SYSTEM (NEW)
// Desktop → slide from right
// Mobile → slide from bottom
// ==============================

// Create overlay + panel
const infoOverlay = document.createElement('div');
infoOverlay.className = 'info-overlay';

const infoPanel = document.createElement('div');
infoPanel.className = 'info-panel';

document.body.appendChild(infoOverlay);
document.body.appendChild(infoPanel);

// Open panel
function openInfoPanel(text) {
    infoPanel.innerHTML = `<div class="info-close-btn">✕</div><p>${text}</p>`;
    infoOverlay.classList.add('show');

    if (window.innerWidth > 700) {
        infoPanel.classList.add('show', 'desktop');
        infoPanel.classList.remove('mobile');
    } else {
        infoPanel.classList.add('show', 'mobile');
        infoPanel.classList.remove('desktop');
    }
}

// Close panel
function closeInfoPanel() {
    infoOverlay.classList.remove('show');
    infoPanel.classList.remove('show', 'desktop', 'mobile');
}

// Close triggers
infoOverlay.addEventListener('click', closeInfoPanel);

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeInfoPanel();
});

infoPanel.addEventListener('click', e => {
    if (e.target.classList.contains('info-close-btn')) closeInfoPanel();
});

// Attach icons to command cards
document.querySelectorAll('.command-card').forEach(card => {
    const cmd = card.querySelector('.command').textContent.trim();
    
    if (commandInfo[cmd]) {
        const icon = document.createElement('span');
        icon.className = 'info-icon';
        icon.textContent = 'i';
        card.appendChild(icon);

        icon.addEventListener('click', e => {
            e.stopPropagation();
            openInfoPanel(commandInfo[cmd]);
        });
    }
});
