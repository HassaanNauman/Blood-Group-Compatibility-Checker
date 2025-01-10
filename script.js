const bloodCompatibility = {
    'O-': ['O-'],
    'O+': ['O-', 'O+'],
    'B-': ['O-', 'B-'],
    'B+': ['O-', 'O+', 'B-', 'B+'],
    'A-': ['O-', 'A-'],
    'A+': ['O-', 'O+', 'A-', 'A+'],
    'AB-': ['O-', 'B-', 'A-', 'AB-'],
    'AB+': ['O-', 'O+', 'B-', 'B+', 'A-', 'A+', 'AB-', 'AB+']
};
document.getElementById('bloodForm').onsubmit = function () {
    const name = document.getElementById('name').value.trim();
    const fatherName = document.getElementById('fatherName').value.trim();
    const dob = document.getElementById('dob').value;
    const age = parseInt(document.getElementById('age').value);
    const bloodGroup = document.getElementById('bloodGroup').value;

    if (name.length === 0 || fatherName.length === 0 || dob.length === 0 || isNaN(age) || bloodGroup.length === 0) {
        alert('Please fill out all fields correctly.');
        return false;
    }
    if (bloodCompatibility[bloodGroup] === undefined) {
        alert('Invalid blood group selected.');
        return false;
    }

    const compatibleDonors = bloodCompatibility[bloodGroup];
    const resultDiv = document.getElementById('result');
    const userDetailsDiv = document.getElementById('userDetails');
    const donorListDiv = document.getElementById('donorList');
    userDetailsDiv.innerHTML = `
        Name: ${name}<br>
        Father's Name: ${fatherName}<br>
        Date of Birth: ${new Date(dob).toLocaleDateString()}<br>
        Age: ${age}<br>
        Blood Group: ${bloodGroup}<br>
    `;

    donorListDiv.innerHTML = compatibleDonors.map(donor => donor).join(', ');

    resultDiv.style.display = 'block';
    return false;
};
