/* 
    This file contains an array of objects as tasks, to be loaded in the execution.
*/
var tasks = [
    {
        'title'         :   'Keep all the updated requirements in one place',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.`,
        'Id'            :    '1', 
    },
    {
        'title'         :   'Consider creating an acceptance criteria list',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `Descriptive requirements are very helpful when it comes to understanding the context of a problem, yet finally it is good to precisely specify what is expected. Thus the developer will not have to look for the actual requirements in a long, descriptive text but he will be able to easily get to the essence. One might find that sometimes — when acceptance criteria are well defined — there is little or no need for any additional information. Example:
        a) User navigates to “/accounts” and clicks on red download CSV button
        b) Popup appears with two buttons: “This year” and “Last year”
        c) If user clicked on “Last year” download is initiated
        d) CSV downloaded includes following columns…`,
        'Id'            :    '2',
    },
    {
        'title'         :   'Provide mockups',
        'type'          :   'Feature',
        'priority'      :   'Low',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `A textual requirements description is essential in most cases, but an image is often worth more than a thousand words. Even a simple mockup can limit misunderstandings by a great factor. There are many apps out there that might be helpful here, like Balsamiq, InVision or Mockingbird, but manipulating screenshots of an existing app also works.`,
        'Id'            :    '3',
    },
    {
        'title'         :   'Provide examples, credentials, etc',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `If the expectation is to process or generate some file — attach an example of such a file. If the goal is to integrate what is being developed with some service, ensure your devs have access to this service and its documentation. This list could go on and on — the bottom line is — if there is something that our developer might make use of, try to foresee it and provide them with (access to) it.`,
        'Id'            :    '4',
    },
    {
        'title'         :   'Annotate',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'Done',
        'date'          :   '2022-10-08',
        'description'   :   `The mockup provided can sometimes be confusing for developers. Especially if it contains much more content than the scope of the task described. Drop a couple of arrows, outlines and annotations here and there to emphasize what are the important parts of the mockup from the task requirements perspective.`,
        'Id'            :    '5',
    },
    {
        'title'         :   'Use charts and diagrams',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `While it is not always necessary, sometimes it might be beneficial to prepare a flowchart, a block diagram or some other kind of concept visualization that will render it easy for the developer to comprehend the task and its scope.`,
        'Id'            :    '6',
    },
  
   
];