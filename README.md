
#How long did you spend on the coding test? 
    I have spend more than 5 hrs on this coding test.


#What was the most useful feature that was added to the latest version of your chosen language?
    One of the most useful features added to recent versions of JavaScript is optional chaining (?.), introduced in ES2020. This feature simplifies accessing deeply nested properties, making the code cleaner and reducing the need for multiple checks to prevent errors if any property in the chain is undefined or null.

  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [dueDate, setDueDate] = useState(task?.dueDate || '');
  const [priority, setPriority] = useState(task?.priority || 'Medium');

  useEffect(() => {
    setTitle(task?.title || '');
    setDescription(task?.description || '');
    setDueDate(task?.dueDate || '');
    setPriority(task?.priority || 'Medium');
  }, [task]);


  #How would you track down a performance issue in production? Have you ever had to do this?
      No

 #If you had more time, what additional features or improvements would you consider adding to the task management application?
    With more time, some valuable additions to your task management application could include:

   1. Sort and Filter Enhancements: Enhance filtering options, allowing users to sort tasks 
      by creation date, due date, and priority, with customizable filters for a tailored 
      task view.
   2. Archive Completed Tasks: Implement a feature to archive completed tasks rather than 
      deleting them. This keeps the task list manageable but allows users to refer back to 
      completed tasks when needed.
   3. Reminders and Notifications: Integrate notifications via email or push notifications 
      to remind users of approaching due dates or overdue tasks, enhancing task visibility 
      and completion rates.
   
