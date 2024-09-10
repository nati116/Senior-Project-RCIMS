const express = require('express');
const signupRoute = require('./routes/Signup');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createAdminAccount } = require('./scripts/setup');
const loginRoute = require('./routes/Login');
const authenticatedRoute = require('./routes/Authenticated');
const professionalManagementRoute = require('./routes/Admin routes/ProfessionalManagement');
const patientManagementRoute = require('./routes/Admin routes/PatientManagement');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

createAdminAccount();

app.use('/user', signupRoute);
app.use('/auth', loginRoute);
app.use('/api', authenticatedRoute);
app.use('/api/admin/professionals', professionalManagementRoute);
app.use('/api/admin/patients', patientManagementRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});