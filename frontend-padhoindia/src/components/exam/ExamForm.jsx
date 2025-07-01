import React, { useState } from "react";
import { submitExamForm } from "../../services/api"; // Adjust path
import toast from "react-hot-toast";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";

const ExamForm = () => {
  const [form, setForm] = useState({
    candidateName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    gender: "",
    category: "",
    mobileNumber: "",
    emailId: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    educationDetails: [
      { qualification: "", boardOrUniversity: "", yearOfPassing: "", percentageOrCGPA: "" },
    ],
  });

  const [submitted, setSubmitted] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e, index, field) => {
    if (["qualification", "boardOrUniversity", "yearOfPassing", "percentageOrCGPA"].includes(field)) {
      const updatedEducation = [...form.educationDetails];
      updatedEducation[index][field] = e.target.value;
      setForm({ ...form, educationDetails: updatedEducation });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const addEducationRow = () => {
    setForm({
      ...form,
      educationDetails: [...form.educationDetails, {
        qualification: "", boardOrUniversity: "", yearOfPassing: "", percentageOrCGPA: ""
      }]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.loading("Submitting your application...", { id: "submit" });

    // Convert dateOfBirth from dd-mm-yyyy to yyyy-mm-dd
    const dobParts = form.dateOfBirth.split("-");
    let formattedDob = "";
    if (dobParts.length === 3) {
      const [dd, mm, yyyy] = dobParts;
      // Simple validation: check day, month, year lengths
      if (dd.length === 2 && mm.length === 2 && yyyy.length === 4) {
        formattedDob = `${yyyy}-${mm}-${dd}`;
      }
    }

    const formToSubmit = {
      ...form,
      dateOfBirth: formattedDob || form.dateOfBirth, // send formatted or fallback to original
    };

    try {
      const response = await submitExamForm(formToSubmit);
      setSubmitted(response.data.registrationSummary);
      toast.success("Application submitted successfully!", { id: "submit" });
    } catch (error) {
      toast.dismiss("submit");
      const message = error.response?.data?.message || "Submission failed.";
      toast.error(message);
    }
    setLoading(false);
  };

  const formatDateDDMMYYYY = (dateString) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  if (isNaN(date)) return "-";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero indexed
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};


  const downloadPdf = () => {
    if (!submitted) return;

    const doc = new jsPDF("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();

    // Header
    doc.setFontSize(18);
    doc.setTextColor("#2c3e50");
    doc.setFont("helvetica", "bold");
    doc.text("Exam Registration Summary", pageWidth / 2, 18, { align: "center" });
    doc.setLineWidth(0.5);
    doc.line(15, 22, pageWidth - 15, 22);

    // Candidate Info
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    let y = 28;

    const addLabelValue = (label, value) => {
      doc.setFont(undefined, "bold");
      doc.text(`${label}: `, 15, y);
      doc.setFont(undefined, "normal");
      doc.text(`${value}`, 60, y);
      y += 7;
    };

    addLabelValue("Application Number", submitted.applicationNumber);
    addLabelValue("Candidate Name", submitted.candidateName);
    addLabelValue("Father's Name", submitted.fatherName || "-");
    addLabelValue("Mother's Name", submitted.motherName || "-");
    addLabelValue("Email", submitted.emailId);
    addLabelValue("Mobile Number", submitted.mobileNumber);
    addLabelValue("Category", submitted.category);
    addLabelValue("Date of Birth", submitted.dob ? new Date(submitted.dob).toLocaleDateString() : "-");
    addLabelValue("Gender", submitted.gender);
    addLabelValue("Address", submitted.address || "-");
    addLabelValue("City", submitted.city || "-");
    addLabelValue("State", submitted.state || "-");
    addLabelValue("Pincode", submitted.pincode || "-");

    // Education Section Title
    y += 10;
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text("Educational Qualifications", 15, y);
    y += 7;

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");

    // Draw table headers
    const colX = [15, 70, 130, 165];
    const headers = ["Qualification", "Board/University", "Year of Passing", "Percentage/CGPA"];
    headers.forEach((header, i) => {
      doc.setFont(undefined, "bold");
      doc.text(header, colX[i], y);
    });
    y += 5;
    doc.setLineWidth(0.3);
    doc.line(15, y, pageWidth - 15, y);
    y += 5;

    // Education rows
    submitted.educationDetails.forEach((edu) => {
      doc.setFont(undefined, "normal");
      doc.text(edu.qualification || "-", colX[0], y);
      doc.text(edu.boardOrUniversity || "-", colX[1], y);
      doc.text(edu.yearOfPassing || "-", colX[2], y);
      doc.text(edu.percentageOrCGPA || "-", colX[3], y);
      y += 7;
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });

    // Footer line
    doc.setLineWidth(0.5);
    doc.line(15, 290, pageWidth - 15, 290);
    doc.setFontSize(10);
    doc.text("Generated by PadhoIndia - www.padhoindia.com", pageWidth / 2, 295, { align: "center" });

    doc.save(`Application_${submitted.applicationNumber}.pdf`);
  };

  if (submitted) {
    return (
      <div className="max-w-5xl mx-auto mt-14 p-10 bg-white shadow-xl rounded-lg border border-gray-300">
        <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center tracking-tight">Application Submitted</h2>
        <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-gray-800 text-lg">
          <InfoRow label="Application Number" value={submitted.applicationNumber} />
          <InfoRow label="Candidate Name" value={submitted.candidateName} />
          <InfoRow label="Father's Name" value={submitted.fatherName || "-"} />
          <InfoRow label="Mother's Name" value={submitted.motherName || "-"} />
          <InfoRow label="Email" value={submitted.emailId} />
          <InfoRow label="Mobile Number" value={submitted.mobileNumber} />
          <InfoRow label="Category" value={submitted.category} />
          {/* <InfoRow label="Date of Birth" value={submitted.dob ? new Date(submitted.dob).toLocaleDateString() : "-"} /> */}
          <InfoRow label="Date of Birth" value={formatDateDDMMYYYY(submitted.dob)} />
          <InfoRow label="Gender" value={submitted.gender} />
          <InfoRow label="Address" value={submitted.address || "-"} />
          <InfoRow label="City" value={submitted.city || "-"} />
          <InfoRow label="State" value={submitted.state || "-"} />
          <InfoRow label="Pincode" value={submitted.pincode || "-"} />
        </div>

        <h3 className="mt-10 mb-5 text-2xl font-semibold border-b border-gray-300 pb-2">Educational Qualifications</h3>
        <div className="space-y-5">
          {submitted.educationDetails.map((edu, i) => (
            <div
              key={i}
              className="grid grid-cols-4 gap-6 bg-gray-50 p-4 rounded-md border border-gray-200 shadow-sm"
            >
              <span className="font-semibold">Qualification:</span>
              <span>{edu.qualification || "-"}</span>
              <span className="font-semibold">Board/University:</span>
              <span>{edu.boardOrUniversity || "-"}</span>
              <span className="font-semibold">Year of Passing:</span>
              <span>{edu.yearOfPassing || "-"}</span>
              <span className="font-semibold">Percentage/CGPA:</span>
              <span>{edu.percentageOrCGPA || "-"}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={downloadPdf}
            className="px-10 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md"
          >
            Download PDF Summary
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full px-4 mt-6 flex justify-end">
        <Link to="/exam" className="w-full md:w-auto">
          <button className="w-full md:w-60 bg-emerald-600 hover:bg-emerald-700 text-white text-base font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300">
            Start Exam
          </button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto mt-12 p-12 bg-white rounded-xl shadow-xl border border-gray-300">
        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-10 text-center tracking-tight">
          Exam Registration Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-gray-900">
          <Input label="Candidate Name" name="candidateName" value={form.candidateName} onChange={handleChange} />
          <Input label="Father's Name" name="fatherName" value={form.fatherName} onChange={handleChange} />
          <Input label="Mother's Name" name="motherName" value={form.motherName} onChange={handleChange} />
          <Input
            label="Date of Birth"
            name="dateOfBirth"
            type="text"  // Changed to text from date
            value={form.dateOfBirth}
            onChange={handleChange}
            placeholder="DD-MM-YYYY"
          />
          <Select label="Gender" name="gender" value={form.gender} onChange={handleChange} options={["Male", "Female", "Other"]} />
          <Select label="Category" name="category" value={form.category} onChange={handleChange} options={["General", "OBC", "SC", "ST", "Other"]} />
          <Input label="Mobile Number" name="mobileNumber" type="tel" value={form.mobileNumber} onChange={handleChange} />
          <Input label="Email Address" name="emailId" type="email" value={form.emailId} onChange={handleChange} />
          <Input label="Address" name="address" value={form.address} onChange={handleChange} full />
          <Input label="City" name="city" value={form.city} onChange={handleChange} />
          <Input label="State" name="state" value={form.state} onChange={handleChange} />
          <Input label="Pincode" name="pincode" value={form.pincode} onChange={handleChange} />
        </div>

        <section className="mt-12">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5 border-b border-gray-300 pb-2">
            Educational Qualifications
          </h3>
          {form.educationDetails.map((edu, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <Input placeholder="Qualification" value={edu.qualification} onChange={(e) => handleChange(e, index, "qualification")} />
              <Input placeholder="Board/University" value={edu.boardOrUniversity} onChange={(e) => handleChange(e, index, "boardOrUniversity")} />
              <Input placeholder="Year of Passing" value={edu.yearOfPassing} onChange={(e) => handleChange(e, index, "yearOfPassing")} />
              <Input placeholder="Percentage/CGPA" value={edu.percentageOrCGPA} onChange={(e) => handleChange(e, index, "percentageOrCGPA")} />
            </div>
          ))}
          <button
            type="button"
            onClick={addEducationRow}
            className="text-indigo-600 hover:underline font-medium"
          >
            + Add More Education
          </button>
        </section>

        <button
          type="submit"
          disabled={loading}
          className={`mt-14 w-full py-4 rounded-xl font-bold text-white transition ${loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-700 hover:bg-indigo-800"
            }`}
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </>
  );
};

const Input = ({ label, placeholder, name, type = "text", value, onChange, full }) => (
  <div className={`flex flex-col ${full ? "md:col-span-2" : ""}`}>
    {label && <label htmlFor={name} className="mb-1 font-semibold text-gray-700">{label}</label>}
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder || label}
      value={value}
      onChange={onChange}
      className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      required
    />
  </div>
);

const Select = ({ label, name, value, onChange, options }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="mb-1 font-semibold text-gray-700">{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      required
    >
      <option value="" disabled>Select</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between border-b border-gray-200 py-2">
    <span className="font-semibold text-gray-700">{label}</span>
    <span className="text-gray-900">{value}</span>
  </div>
);

export default ExamForm;
