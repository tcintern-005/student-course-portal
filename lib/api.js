const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/courses`;

export async function getCourses() {
  const response = await fetch(API_URL);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch courses");
  }

  return data;
}

export async function addCourse(course) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(course),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to add course");
  }

  return data;
}

export async function updateCourse(id, course) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(course),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update course");
  }

  return data;
}

export async function deleteCourse(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete course");
  }

  return data;
}