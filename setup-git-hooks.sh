#!/bin/bash

# Create a Template Directory with a hooks subdirectory
mkdir -p ~/my-git-template/hooks

# Create the prepare-commit-msg hook script
cat << 'EOF' > ~/my-git-template/hooks/prepare-commit-msg
#!/usr/bin/env python
import sys
import re

JIRA_TICKET_REGEX = r"^(ENGG|EPS)-[0-9]+"

MIN_COMMIT_LENGTH = 20

def main():
    # Ensure a commit message file is provided as an argument
    if len(sys.argv) < 2:
        print("Error: No commit message file provided.")
        sys.exit(1)
    
    commit_message_file = sys.argv[1]
    
    # Read the commit message from the file
    with open(commit_message_file, "r") as f:
        commit_message = f.read().strip()

    # Check if the commit message starts with a valid JIRA ticket key
    if not re.match(JIRA_TICKET_REGEX, commit_message):
        print("Error: Commit message must be prefixed with a JIRA ticket key (e.g., ENGG-123 or EPS-456).")
        sys.exit(1)
    
    # Check if the commit message meets the minimum length requirement
    if len(commit_message) < MIN_COMMIT_LENGTH:
        print(f"Error: Commit message must be at least {MIN_COMMIT_LENGTH} characters long.")
        sys.exit(1)
    
    # If all checks pass, print a success message
    print("Commit message validation passed.")

if __name__ == "__main__":
    main()
EOF

# Make the prepare-commit-msg hook script executable
chmod +x ~/my-git-template/hooks/prepare-commit-msg

# Configure Git to use the template directory
git config --global init.templateDir ~/my-git-template

echo "Git hooks have been set up successfully."















