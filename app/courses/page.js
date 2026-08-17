"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CourseCard from "@/components/CourseCard";
import SectionTitle from "@/components/SectionTitle";

import {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} from "@/lib/api";

export default function CoursesPage() {
  const router = useRouter();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Add Course form state
  const [title, setTitle] = useState("");
  const [instructor, setInstructor] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");

  // Add Course states
  const [addingCourse, setAddingCourse] = useState(false);
  const [addError, setAddError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Edit Course states
  const [editingCourse, setEditingCourse] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editInstructor, setEditInstructor] = useState("");
  const [editDuration, setEditDuration] = useState("");
  const [editLevel, setEditLevel] = useState("");
  const [updatingCourse, setUpdatingCourse] = useState(false);
  const [editError, setEditError] = useState("");

  // Delete Course states
  const [deletingCourse, setDeletingCourse] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  // Check authentication + Fetch courses
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
      return;
    }

    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data.courses || []);
      } catch (error) {
        const message = error.message.toLowerCase();

        if (
          message.includes("authentication") ||
          message.includes("invalid") ||
          message.includes("expired")
        ) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          router.replace("/login");
          return;
        }

        setError("Unable to load courses. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [router]);

  // Add Course
  const handleAddCourse = async () => {
    setAddError("");
    setSuccessMessage("");

    if (!title || !instructor || !duration || !level) {
      setAddError("Please fill in all fields.");
      return;
    }

    try {
      setAddingCourse(true);

      const data = await addCourse({
        title,
        instructor,
        duration,
        level,
      });

      setCourses((previousCourses) => [
        ...previousCourses,
        data.course,
      ]);

      setTitle("");
      setInstructor("");
      setDuration("");
      setLevel("");

      setSuccessMessage("Course added successfully!");
    } catch (error) {
      setAddError(error.message);
    } finally {
      setAddingCourse(false);
    }
  };

  // Start Editing
  const handleEdit = (course) => {
    setEditingCourse(course);

    setEditTitle(course.title || "");
    setEditInstructor(course.instructor || "");
    setEditDuration(course.duration || "");
    setEditLevel(course.level || "");

    setEditError("");
  };

  // Update Course
  const handleUpdateCourse = async () => {
    setEditError("");

    if (!editTitle || !editInstructor || !editDuration || !editLevel) {
      setEditError("Please fill in all fields.");
      return;
    }

    try {
      setUpdatingCourse(true);

      const data = await updateCourse(editingCourse.id, {
        title: editTitle,
        instructor: editInstructor,
        duration: editDuration,
        level: editLevel,
      });

      setCourses((previousCourses) =>
        previousCourses.map((course) =>
          course.id === editingCourse.id
            ? data.course
            : course
        )
      );

      setEditingCourse(null);
    } catch (error) {
      setEditError(error.message);
    } finally {
      setUpdatingCourse(false);
    }
  };

  // Delete Course
  const handleDelete = async (courseId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) {
      return;
    }

    setDeleteError("");

    try {
      setDeletingCourse(true);

      await deleteCourse(courseId);

      setCourses((previousCourses) =>
        previousCourses.filter((course) => course.id !== courseId)
      );
    } catch (error) {
      setDeleteError(error.message);
    } finally {
      setDeletingCourse(false);
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="Explore Professional Courses"
          subtitle="Learn today's most in-demand technologies through project-based learning."
        />

        {/* Add Course Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md mt-10">

          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Add New Course
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Course Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-slate-300 rounded-lg p-3 text-slate-800 placeholder-slate-500"
            />

            <input
              type="text"
              placeholder="Instructor"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              className="w-full border border-slate-300 rounded-lg p-3 text-slate-800 placeholder-slate-500"
            />

            <input
              type="text"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full border border-slate-300 rounded-lg p-3 text-slate-800 placeholder-slate-500"
            />

            <input
              type="text"
              placeholder="Level (Beginner, Intermediate, Advanced)"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full border border-slate-300 rounded-lg p-3 text-slate-800 placeholder-slate-500"
            />

            {addError && (
              <p className="text-red-600 text-sm">
                {addError}
              </p>
            )}

            {successMessage && (
              <p className="text-green-600 text-sm">
                {successMessage}
              </p>
            )}

            <button
              type="button"
              onClick={handleAddCourse}
              disabled={addingCourse}
              className="w-full bg-slate-800 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 disabled:opacity-50"
            >
              {addingCourse ? "Adding Course..." : "Add Course"}
            </button>

          </div>
        </div>

        {/* Edit Course Form */}
        {editingCourse && (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md mt-10">

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Edit Course
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-3 text-slate-800"
              />

              <input
                type="text"
                value={editInstructor}
                onChange={(e) => setEditInstructor(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-3 text-slate-800"
              />

              <input
                type="text"
                value={editDuration}
                onChange={(e) => setEditDuration(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-3 text-slate-800"
              />

              <input
                type="text"
                value={editLevel}
                onChange={(e) => setEditLevel(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-3 text-slate-800"
              />

              {editError && (
                <p className="text-red-600 text-sm">
                  {editError}
                </p>
              )}

              <button
                type="button"
                onClick={handleUpdateCourse}
                disabled={updatingCourse}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
              >
                {updatingCourse ? "Updating Course..." : "Update Course"}
              </button>

              <button
                type="button"
                onClick={() => setEditingCourse(null)}
                className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 py-3 rounded-lg font-semibold"
              >
                Cancel
              </button>

            </div>
          </div>
        )}

        {/* Delete Error */}
        {deleteError && (
          <p className="text-center text-red-600 text-sm mt-6">
            {deleteError}
          </p>
        )}

        {/* Loading */}
        {loading && (
          <p className="text-center text-slate-700 text-lg mt-10">
            Loading courses...
          </p>
        )}

        {/* Fetch Error */}
        {error && (
          <p className="text-center text-red-600 text-lg mt-10">
            {error}
          </p>
        )}

        {/* Courses */}
        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-10 mt-10">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

      </div>
    </main>
  );
}