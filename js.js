document.getElementById('accounts').addEventListener("click", showAccounts);
document.getElementById('workspace').addEventListener("click", showWorkspace);
document.getElementById('teams').addEventListener("click", showTeams);

const animations = [
    'animate__animated',
    'animate__fadeIn'
  ];

function showAccounts() {
    document.querySelector('.accountHiddenOne').classList.remove('hidden')
    document.querySelector('.accountHiddenTwo').classList.remove('hidden')
    document.querySelector('.accountHiddenThree').classList.remove('hidden')
    document.querySelector('.accountHiddenFour').classList.remove('hidden')
    document.querySelector('.accountHiddenFour').classList.add('mb-8')
    document.querySelector('.fi-rr-caret-right').classList.remove('fi-rr-caret-right')
   
}

function showWorkspace() {
    document.querySelector('.workspaceHidden').classList.remove('hidden')
    document.querySelector('.workspaceHiddenOne').classList.remove('hidden')
    document.querySelector('.workspaceHiddenTwo').classList.remove('hidden')
    document.querySelector('.workspaceHiddenThree').classList.remove('hidden')
    document.querySelector('.workspaceHiddenFour').classList.remove('hidden')
    document.querySelector('.workspaceHiddenFour').classList.add('mb-8')
    document.querySelector('.fi-rr-caret-right').classList.remove('fi-rr-caret-right')
}

function showTeams() {
    document.querySelector('.teamsHidden').classList.remove('hidden')
    document.querySelector('.teamsHidden').classList.add('mb-8')
    document.querySelector('.fi-rr-caret-right').classList.remove('fi-rr-caret-right')
}