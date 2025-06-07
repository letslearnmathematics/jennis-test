// Question bank - 140 questions (20 per level x 7 levels)
const questionBank = [
    // Level 1: Basic Wildlife Concepts
    // Level 1: Foundational Concepts and Lesser-Explored Topics
    {
        level: 1,
        question: "What is the primary purpose of reference services in libraries?",
        options: [
            { text: "To organize book collections", correct: false },
            { text: "To bridge users with needed information", correct: true },
            { text: "To manage library finances", correct: false },
            { text: "To conduct academic research", correct: false }
        ]
    },
    {
        level: 1,
        question: "Which principle emphasizes adapting responses to individual user needs?",
        options: [
            { text: "Standardization", correct: false },
            { text: "User-Centered Service", correct: true },
            { text: "Resource Sharing", correct: false },
            { text: "Collection Development", correct: false }
        ]
    },
    {
        level: 1,
        question: "What does RUSA stand for in reference service standards?",
        options: [
            { text: "Reference and User Services Association", correct: true },
            { text: "Research University Standards Association", correct: false },
            { text: "Registered United Services Administration", correct: false },
            { text: "Resource Utilization Standards Agency", correct: false }
        ]
    },
    {
        level: 1,
        question: "Which of these is a key component of a reference interview?",
        options: [
            { text: "Active listening", correct: true },
            { text: "Cataloging books", correct: false },
            { text: "Budget planning", correct: false },
            { text: "Staff scheduling", correct: false }
        ]
    },
    {
        level: 1,
        question: "What principle requires protecting user query details?",
        options: [
            { text: "Timeliness", correct: false },
            { text: "Collaboration", correct: false },
            { text: "Confidentiality", correct: true },
            { text: "Instruction", correct: false }
        ]
    },
    {
        level: 1,
        question: "Which service provides remote reference assistance?",
        options: [
            { text: "Virtual Reference", correct: true },
            { text: "Circulation Desk", correct: false },
            { text: "Archival Storage", correct: false },
            { text: "Technical Services", correct: false }
        ]
    },
    {
        level: 1,
        question: "What does the ACRL standard emphasize in reference services?",
        options: [
            { text: "Building maintenance", correct: false },
            { text: "Information literacy instruction", correct: true },
            { text: "Financial reporting", correct: false },
            { text: "Staff uniforms", correct: false }
        ]
    },
    {
        level: 1,
        question: "Which principle ensures services are available to users with disabilities?",
        options: [
            { text: "Accessibility", correct: true },
            { text: "Authority", correct: false },
            { text: "Evaluation", correct: false },
            { text: "Individualization", correct: false }
        ]
    },
    {
        level: 1,
        question: "What is the purpose of continuous evaluation in reference services?",
        options: [
            { text: "To reduce staff numbers", correct: false },
            { text: "To identify areas for improvement", correct: true },
            { text: "To increase book purchases", correct: false },
            { text: "To shorten service hours", correct: false }
        ]
    },
    {
        level: 1,
        question: "Which of these demonstrates intellectual freedom in reference services?",
        options: [
            { text: "Limiting controversial materials", correct: false },
            { text: "Providing diverse perspectives", correct: true },
            { text: "Censoring user queries", correct: false },
            { text: "Restricting database access", correct: false }
        ]
    },
    {
        level: 1,
        question: "According to Ranganathan's principle, what should be at the heart of reference service?",
        options: [
            { text: "The library's collection", correct: false },
            { text: "The user's needs", correct: true },
            { text: "The librarian's expertise", correct: false },
            { text: "The institution's policies", correct: false }
        ]
    },
    {
        level: 1,
        question: "What is the main goal of information literacy instruction in reference services?",
        options: [
            { text: "To increase library membership", correct: false },
            { text: "To empower users to find information independently", correct: true },
            { text: "To reduce the number of reference questions", correct: false },
            { text: "To promote specific databases", correct: false }
        ]
    },
    {
        level: 1,
        question: "Which of these is an example of individualized reference service?",
        options: [
            { text: "A standard response to all queries", correct: false },
            { text: "Recommendations based on user's academic level", correct: true },
            { text: "A general library orientation", correct: false },
            { text: "Mass emailing research guides", correct: false }
        ]
    },
    {
        level: 1,
        question: "What does the principle of authority in reference services emphasize?",
        options: [
            { text: "Using only print resources", correct: false },
            { text: "Relying on credible, authoritative sources", correct: true },
            { text: "Following library hierarchy strictly", correct: false },
            { text: "Limiting services to faculty only", correct: false }
        ]
    },
    {
        level: 1,
        question: "Which of these is a key characteristic of effective reference services?",
        options: [
            { text: "Being judgmental about user queries", correct: false },
            { text: "Providing timely responses", correct: true },
            { text: "Using technical jargon exclusively", correct: false },
            { text: "Focusing only on frequent users", correct: false }
        ]
    },
    {
        level: 1,
        question: "What is the primary benefit of resource sharing in reference services?",
        options: [
            { text: "Reducing staff workload", correct: false },
            { text: "Extending service capabilities through collaboration", correct: true },
            { text: "Decreasing library budgets", correct: false },
            { text: "Limiting user access points", correct: false }
        ]
    },
    {
        level: 1,
        question: "Which principle ensures reference services evolve with changing user needs?",
        options: [
            { text: "Continuous evaluation", correct: true },
            { text: "Standardization", correct: false },
            { text: "Collection size", correct: false },
            { text: "Traditional methods", correct: false }
        ]
    },
    {
        level: 1,
        question: "What is the reference librarian's role in upholding intellectual freedom?",
        options: [
            { text: "Filtering controversial information", correct: false },
            { text: "Providing equal access to all perspectives", correct: true },
            { text: "Advising users what to believe", correct: false },
            { text: "Limiting access to certain age groups", correct: false }
        ]
    },
    {
        level: 1,
        question: "Which tool is essential for virtual reference services?",
        options: [
            { text: "Book carts", correct: false },
            { text: "Online chat platforms", correct: true },
            { text: "Card catalogs", correct: false },
            { text: "Microfilm readers", correct: false }
        ]
    },
    {
        level: 1,
        question: "What is the first step in conducting a reference interview?",
        options: [
            { text: "Suggesting resources immediately", correct: false },
            { text: "Clarifying the user's information need", correct: true },
            { text: "Checking the library catalog", correct: false },
            { text: "Referring to another department", correct: false }
        ]
    },

    // Levels 2-7 questions would continue here with increasing difficulty
        // Level 2: Wildlife Conservation & Protected Areas
    
    {
        level: 2,
        question: "Which of these is NOT a core principle of reference services according to RUSA guidelines?",
        options: [
            { text: "User-centered approach", correct: false },
            { text: "Accuracy and reliability", correct: false },
            { text: "Revenue generation", correct: true },
            { text: "Confidentiality and privacy", correct: false }
        ]
    },
    {
        level: 2,
        question: "What is the primary purpose of a reference interview?",
        options: [
            { text: "To assess the user's library fines", correct: false },
            { text: "To determine the exact nature of the user's information need", correct: true },
            { text: "To promote new library acquisitions", correct: false },
            { text: "To schedule library tours", correct: false }
        ]
    },
    {
        level: 2,
        question: "Which standard governs accessibility in virtual reference services?",
        options: [
            { text: "ADA (Americans with Disabilities Act)", correct: true },
            { text: "ISO 9001", correct: false },
            { text: "MLA citation style", correct: false },
            { text: "Dewey Decimal System", correct: false }
        ]
    },
    {
        level: 2,
        question: "What is the recommended maximum response time for email reference queries according to RUSA standards?",
        options: [
            { text: "24 hours", correct: true },
            { text: "1 week", correct: false },
            { text: "Immediate response required", correct: false },
            { text: "No specific timeframe", correct: false }
        ]
    },
    {
        level: 2,
        question: "Which of these would violate the principle of confidentiality in reference services?",
        options: [
            { text: "Discussing a user's query with another librarian for clarification", correct: false },
            { text: "Sharing a user's research topic in a staff meeting without identifiers", correct: false },
            { text: "Posting a user's specific question on social media", correct: true },
            { text: "Keeping private records of transactions for statistical purposes", correct: false }
        ]
    },
    {
        level: 2,
        question: "What is the key difference between ready reference and research queries?",
        options: [
            { text: "Ready reference requires extensive research", correct: false },
            { text: "Research questions can be answered quickly with basic sources", correct: false },
            { text: "Ready reference questions have straightforward answers, while research questions are more complex", correct: true },
            { text: "Only faculty can ask research questions", correct: false }
        ]
    },
    {
        level: 2,
        question: "Which of these demonstrates the principle of 'teaching over telling' in reference services?",
        options: [
            { text: "Providing the exact answer without explanation", correct: false },
            { text: "Guiding the user through the search process", correct: true },
            { text: "Completing the assignment for the user", correct: false },
            { text: "Referring all questions to a supervisor", correct: false }
        ]
    },
    {
        level: 2,
        question: "What is the primary benefit of participating in a reference consortium?",
        options: [
            { text: "Reducing local staffing needs", correct: false },
            { text: "Extending service hours through shared resources", correct: true },
            { text: "Eliminating the need for local collections", correct: false },
            { text: "Standardizing all library policies", correct: false }
        ]
    },
    {
        level: 2,
        question: "Which evaluation method would best assess reference service quality?",
        options: [
            { text: "Counting the number of books on shelves", correct: false },
            { text: "Tracking user satisfaction and accuracy of responses", correct: true },
            { text: "Measuring the square footage of the reference area", correct: false },
            { text: "Calculating staff-to-book ratio", correct: false }
        ]
    },
    {
        level: 2,
        question: "When is it appropriate to refer a reference question to another specialist?",
        options: [
            { text: "When the question falls outside the librarian's expertise", correct: true },
            { text: "When the user has asked more than three questions", correct: false },
            { text: "When the library is about to close", correct: false },
            { text: "When the user is not a library member", correct: false }
        ]
    },
    {
        level: 2,
        question: "Which of these is an example of an authoritative source for medical reference questions?",
        options: [
            { text: "Personal blogs", correct: false },
            { text: "Wikipedia articles", correct: false },
            { text: "PubMed database", correct: true },
            { text: "Social media discussions", correct: false }
        ]
    },
    {
        level: 2,
        question: "What is the main challenge in virtual reference services compared to in-person?",
        options: [
            { text: "Inability to use reference materials", correct: false },
            { text: "Difficulty in perceiving non-verbal cues", correct: true },
            { text: "Higher cost per transaction", correct: false },
            { text: "Limited to text-only communication", correct: false }
        ]
    },
    {
        level: 2,
        question: "Which principle requires providing equal service regardless of a user's background?",
        options: [
            { text: "Intellectual freedom", correct: false },
            { text: "Equity of access", correct: true },
            { text: "Resource sharing", correct: false },
            { text: "Continuous evaluation", correct: false }
        ]
    },
    {
        level: 2,
        question: "What is the first step in evaluating reference resources?",
        options: [
            { text: "Check the publication date", correct: false },
            { text: "Determine the authority of the author/publisher", correct: true },
            { text: "Count the number of illustrations", correct: false },
            { text: "Verify the page count", correct: false }
        ]
    },
    {
        level: 2,
        question: "Which of these would be considered an unethical reference practice?",
        options: [
            { text: "Providing instruction on database searching", correct: false },
            { text: "Sharing a user's reading history without consent", correct: true },
            { text: "Referring to another library's collection", correct: false },
            { text: "Using authoritative sources", correct: false }
        ]
    },
    {
        level: 2,
        question: "What is the primary purpose of follow-up in reference transactions?",
        options: [
            { text: "To ensure the user's need was met", correct: true },
            { text: "To promote library events", correct: false },
            { text: "To collect overdue fines", correct: false },
            { text: "To schedule staff meetings", correct: false }
        ]
    },
    {
        level: 2,
        question: "Which technology is most essential for modern reference services?",
        options: [
            { text: "Typewriters", correct: false },
            { text: "Microfilm readers", correct: false },
            { text: "Internet-connected research databases", correct: true },
            { text: "Card catalogs", correct: false }
        ]
    },
    {
        level: 2,
        question: "What does the 'reference service triangle' consist of?",
        options: [
            { text: "User, Information Need, and Information Resource", correct: true },
            { text: "Books, Computers, and Librarians", correct: false },
            { text: "Catalog, Circulation Desk, and Stacks", correct: false },
            { text: "Print, Digital, and Audio-visual materials", correct: false }
        ]
    },
    {
        level: 2,
        question: "Which factor is most important when selecting reference materials?",
        options: [
            { text: "Color of the cover", correct: false },
            { text: "Alignment with user needs and accuracy of content", correct: true },
            { text: "Price of the resource", correct: false },
            { text: "Size of the publication", correct: false }
        ]
    },
    {
        level: 2,
        question: "What is the key difference between information and reference services?",
        options: [
            { text: "Reference services are always fee-based", correct: false },
            { text: "Information services provide passive access while reference services involve active assistance", correct: true },
            { text: "Only academic libraries offer reference services", correct: false },
            { text: "There is no difference between them", correct: false }
        ]
    },


    //level 3
    // Level 3: Wildlife Utilization and Biodiversity Conservation
     {
        level: 3,
        question: "A user asks for help with a controversial political topic. How should you apply intellectual freedom principles?",
        options: [
            { text: "Provide balanced resources from multiple perspectives", correct: true },
            { text: "Only share materials that align with library policies", correct: false },
            { text: "Decline to assist with sensitive topics", correct: false },
            { text: "Refer them to external political organizations", correct: false }
        ]
    },
    {
        level: 3,
        question: "What is the most effective strategy when a user's query requires specialized legal information?",
        options: [
            { text: "Provide general legal resources and clarify you cannot give legal advice", correct: true },
            { text: "Offer your personal interpretation of the law", correct: false },
            { text: "Direct them to the nearest law firm", correct: false },
            { text: "Avoid all legal reference questions", correct: false }
        ]
    },
    {
        level: 3,
        question: "How would you handle a situation where a reference interview reveals the user actually needs counseling services?",
        options: [
            { text: "Continue providing reference service as requested", correct: false },
            { text: "Discreetly provide information about counseling resources while maintaining boundaries", correct: true },
            { text: "Insist they speak to a manager", correct: false },
            { text: "Ignore the underlying need and focus on surface questions", correct: false }
        ]
    },
    {
        level: 3,
        question: "Which scenario best demonstrates the principle of 'least assistance' in reference services?",
        options: [
            { text: "Completing a student's assignment for them", correct: false },
            { text: "Providing just enough help to empower the user to continue independently", correct: true },
            { text: "Referring all questions to subject specialists", correct: false },
            { text: "Limiting each reference transaction to 2 minutes", correct: false }
        ]
    },
    {
        level: 3,
        question: "What is the primary ethical consideration when handling a reference query about potentially dangerous information?",
        options: [
            { text: "Balancing intellectual freedom with social responsibility", correct: true },
            { text: "Immediately contacting authorities", correct: false },
            { text: "Always refusing such requests", correct: false },
            { text: "Requiring special permission from library administration", correct: false }
        ]
    },
    {
        level: 3,
        question: "When evaluating reference service quality, which metric is most meaningful?",
        options: [
            { text: "Number of questions answered per hour", correct: false },
            { text: "User's successful application of provided information", correct: true },
            { text: "Length of reference interactions", correct: false },
            { text: "Percentage of questions answered without referral", correct: false }
        ]
    },
    {
        level: 3,
        question: "A faculty member requests repeated, extensive research assistance for their own publications. How should you respond?",
        options: [
            { text: "Provide full research support as faculty priority", correct: false },
            { text: "Offer research instruction but decline to do the work for them", correct: true },
            { text: "Refer them to a paid research service", correct: false },
            { text: "Limit assistance to one question per visit", correct: false }
        ]
    },
    {
        level: 3,
        question: "What is the best approach when a user insists on an incorrect answer they found online?",
        options: [
            { text: "Politely suggest verifying with authoritative sources", correct: true },
            { text: "Accept their answer to avoid conflict", correct: false },
            { text: "Insist they're wrong and provide corrections", correct: false },
            { text: "End the reference interview immediately", correct: false }
        ]
    },
    {
        level: 3,
        question: "Which situation would justify breaking confidentiality in a reference transaction?",
        options: [
            { text: "User mentions they're failing a course", correct: false },
            { text: "User reveals plans for self-harm or harming others", correct: true },
            { text: "User asks about controversial topics", correct: false },
            { text: "User requests outdated information", correct: false }
        ]
    },
    {
        level: 3,
        question: "How should you handle a reference request for medical information when the user appears distressed?",
        options: [
            { text: "Provide factual information while suggesting they consult a healthcare professional", correct: true },
            { text: "Offer your personal medical opinion to comfort them", correct: false },
            { text: "Refuse all medical reference questions", correct: false },
            { text: "Only direct them to Wikipedia for quick answers", correct: false }
        ]
    },
    {
        level: 3,
        question: "What is the most appropriate response when a user's query exceeds your professional expertise?",
        options: [
            { text: "Attempt to answer anyway to maintain confidence", correct: false },
            { text: "Acknowledge the limitation and refer to appropriate specialists", correct: true },
            { text: "Tell the user their question is inappropriate", correct: false },
            { text: "Suggest they reformulate their question to something simpler", correct: false }
        ]
    },
    {
        level: 3,
        question: "Which strategy best addresses the challenge of 'unexpressed information needs' in reference interviews?",
        options: [
            { text: "Using open-ended probing questions", correct: true },
            { text: "Waiting for users to clarify themselves", correct: false },
            { text: "Focusing only on the initial stated question", correct: false },
            { text: "Providing general information on all possible topics", correct: false }
        ]
    },
    {
        level: 3,
        question: "When implementing a new virtual reference service, what is the most critical factor for success?",
        options: [
            { text: "Choosing the most advanced technology available", correct: false },
            { text: "Aligning platform selection with user needs and capabilities", correct: true },
            { text: "Minimizing staff training requirements", correct: false },
            { text: "Ensuring the service generates revenue", correct: false }
        ]
    },
    {
        level: 3,
        question: "A user becomes frustrated when you won't provide a definitive answer to their subjective question. How should you respond?",
        options: [
            { text: "Explain the nature of subjective questions and help find various perspectives", correct: true },
            { text: "Provide your personal opinion to satisfy them", correct: false },
            { text: "Escalate to a supervisor immediately", correct: false },
            { text: "End the interaction to avoid conflict", correct: false }
        ]
    },
    {
        level: 3,
        question: "What is the most effective way to evaluate the accuracy of reference responses?",
        options: [
            { text: "Staff self-assessment of their performance", correct: false },
            { text: "Unobtrusive testing with follow-up verification", correct: true },
            { text: "Counting positive comments from users", correct: false },
            { text: "Tracking how often users return with the same question", correct: false }
        ]
    },
    {
        level: 3,
        question: "How should you handle a situation where library policies conflict with professional reference ethics?",
        options: [
            { text: "Always follow library policies without question", correct: false },
            { text: "Advocate for policy changes while currently working within the system", correct: true },
            { text: "Ignore policies and follow your personal judgment", correct: false },
            { text: "Publicly criticize the policies to users", correct: false }
        ]
    },
    {
        level: 3,
        question: "What is the primary value of maintaining reference transaction statistics?",
        options: [
            { text: "Justifying staff positions", correct: false },
            { text: "Demonstrating library value and improving services", correct: true },
            { text: "Comparing staff performance for evaluations", correct: false },
            { text: "Meeting accreditation requirements", correct: false }
        ]
    },
    {
        level: 3,
        question: "When is it appropriate to end a reference interview prematurely?",
        options: [
            { text: "When the user asks too many follow-up questions", correct: false },
            { text: "When the user becomes abusive or threatening", correct: true },
            { text: "When the question requires too much time to answer", correct: false },
            { text: "When the library is about to close", correct: false }
        ]
    },
    {
        level: 3,
        question: "Which factor is most important when designing a reference service for diverse populations?",
        options: [
            { text: "Standardizing services for consistency", correct: false },
            { text: "Understanding and addressing specific community needs", correct: true },
            { text: "Using the most cost-effective approaches", correct: false },
            { text: "Following what other libraries are doing", correct: false }
        ]
    },
    {
        level: 3,
        question: "What is the best approach to maintaining professional boundaries in reference services?",
        options: [
            { text: "Being friendly but maintaining focus on information needs", correct: true },
            { text: "Avoiding all personal conversations", correct: false },
            { text: "Sharing personal experiences to build rapport", correct: false },
            { text: "Only assisting users you feel comfortable with", correct: false }
        ]
    },

    //level 4

    // Level 4: Advanced Wildlife Utilization, Policy & Research
    {
        level: 4,
        question: "A government official requests all reference queries about a sensitive political topic from the past month. How should you respond?",
        options: [
            { text: "Provide the information as it's a government request", correct: false },
            { text: "Politely decline, citing confidentiality of reference transactions", correct: true },
            { text: "Offer to help them submit their own reference questions", correct: false },
            { text: "Refer the request to library administration without comment", correct: false }
        ]
    },
    {
        level: 4,
        question: "When developing a reference assessment program, which qualitative method provides the deepest insights?",
        options: [
            { text: "Transaction counting", correct: false },
            { text: "User behavior analytics", correct: false },
            { text: "Critical incident technique interviews", correct: true },
            { text: "Satisfaction survey averages", correct: false }
        ]
    },
    {
        level: 4,
        question: "What is the most effective strategy for handling reference queries generated by AI chatbots?",
        options: [
            { text: "Treat them like any other reference question", correct: false },
            { text: "Develop specific protocols for AI-generated queries", correct: true },
            { text: "Refuse to answer suspected AI queries", correct: false },
            { text: "Redirect all AI queries to a special department", correct: false }
        ]
    },
    {
        level: 4,
        question: "Which copyright consideration is most critical when providing digital reference services?",
        options: [
            { text: "Fair use in digital reference transactions", correct: true },
            { text: "Copyright notices on physical materials", correct: false },
            { text: "Licensing agreements for print resources", correct: false },
            { text: "Public domain status of older materials", correct: false }
        ]
    },
    {
        level: 4,
        question: "A user demands you verify their conspiracy theory with library resources. What's the best approach?",
        options: [
            { text: "Teach evaluation criteria while providing neutral resources", correct: true },
            { text: "Refuse service due to questionable content", correct: false },
            { text: "Endorse their theory to maintain rapport", correct: false },
            { text: "Only provide materials that disprove their theory", correct: false }
        ]
    },
    {
        level: 4,
        question: "What's the primary challenge in maintaining equity across in-person and virtual reference services?",
        options: [
            { text: "Ensuring comparable service quality and depth", correct: true },
            { text: "Using the same staff for both services", correct: false },
            { text: "Standardizing response times", correct: false },
            { text: "Offering identical resources in both formats", correct: false }
        ]
    },
    {
        level: 4,
        question: "Which emerging technology presents both opportunities and challenges for reference metadata management?",
        options: [
            { text: "Blockchain for transaction records", correct: false },
            { text: "Linked data and knowledge graphs", correct: true },
            { text: "Virtual reality interfaces", correct: false },
            { text: "3D printing services", correct: false }
        ]
    },
    {
        level: 4,
        question: "When analyzing reference service gaps in an academic library, which data source is most valuable?",
        options: [
            { text: "Faculty publication rates", correct: false },
            { text: "Unsuccessful reference transaction logs", correct: true },
            { text: "Library gate counts", correct: false },
            { text: "Interlibrary loan statistics", correct: false }
        ]
    },
    {
        level: 4,
        question: "A community member objects to reference materials about LGBTQ+ issues. How should the library respond?",
        options: [
            { text: "Remove the challenged materials temporarily", correct: false },
            { text: "Follow established reconsideration procedures", correct: true },
            { text: "Limit access to adults only", correct: false },
            { text: "Create a restricted access section", correct: false }
        ]
    },
    {
        level: 4,
        question: "What is the most significant barrier to implementing evidence-based reference practice?",
        options: [
            { text: "Lack of standardized assessment tools", correct: false },
            { text: "Institutional resistance to change", correct: true },
            { text: "Staff technological skills", correct: false },
            { text: "User preferences for traditional methods", correct: false }
        ]
    },
    {
        level: 4,
        question: "Which competency is most critical for reference librarians in the algorithmic age?",
        options: [
            { text: "Understanding search algorithm biases", correct: true },
            { text: "Mastering all database platforms", correct: false },
            { text: "Memorizing reference sources", correct: false },
            { text: "Developing programming skills", correct: false }
        ]
    },
    {
        level: 4,
        question: "What is the primary ethical consideration when implementing AI in reference services?",
        options: [
            { text: "Transparency about AI use and limitations", correct: true },
            { text: "Cost savings from reduced staffing", correct: false },
            { text: "Speed of response times", correct: false },
            { text: "Integration with existing systems", correct: false }
        ]
    },
    {
        level: 4,
        question: "Which demographic factor requires the most significant adaptation of reference interview techniques?",
        options: [
            { text: "Age differences in information literacy", correct: false },
            { text: "Cultural variations in information-seeking behaviors", correct: true },
            { text: "Educational background variations", correct: false },
            { text: "Technological access disparities", correct: false }
        ]
    },
    {
        level: 4,
        question: "When designing a reference service for users with cognitive disabilities, which principle is paramount?",
        options: [
            { text: "Universal design for learning", correct: true },
            { text: "Standardized service protocols", correct: false },
            { text: "Specialized staff training", correct: false },
            { text: "Dedicated physical spaces", correct: false }
        ]
    },
    {
        level: 4,
        question: "What is the most effective way to measure the impact of reference services on student success?",
        options: [
            { text: "Correlating reference use with academic outcomes", correct: true },
            { text: "Counting reference transactions during exams", correct: false },
            { text: "Surveying faculty about library use", correct: false },
            { text: "Tracking database access statistics", correct: false }
        ]
    },
    {
        level: 4,
        question: "Which factor most significantly impacts the future of collaborative reference networks?",
        options: [
            { text: "Standardization of knowledge base systems", correct: false },
            { text: "Interoperability between library platforms", correct: true },
            { text: "Uniform service hours across institutions", correct: false },
            { text: "Consistent staffing levels", correct: false }
        ]
    },
    {
        level: 4,
        question: "A researcher requests help with systematic review methodology. What's the appropriate service boundary?",
        options: [
            { text: "Conducting the literature search for them", correct: false },
            { text: "Teaching systematic review methods and resources", correct: true },
            { text: "Only providing access to databases", correct: false },
            { text: "Referring to a paid research service", correct: false }
        ]
    },
    {
        level: 4,
        question: "What is the most challenging aspect of maintaining reference service quality during staff transitions?",
        options: [
            { text: "Documenting tacit knowledge and decision processes", correct: true },
            { text: "Training on library systems", correct: false },
            { text: "Introducing library policies", correct: false },
            { text: "Familiarizing with the collection", correct: false }
        ]
    },
    {
        level: 4,
        question: "Which emerging trend most significantly impacts reference collection development?",
        options: [
            { text: "Demand-driven acquisition models", correct: false },
            { text: "Shift from ownership to access", correct: true },
            { text: "Increased print monograph purchases", correct: false },
            { text: "Specialization in local history", correct: false }
        ]
    },
    {
        level: 4,
        question: "When implementing chat reference analytics, which metric provides the most meaningful insights?",
        options: [
            { text: "Average chat duration", correct: false },
            { text: "Knowledge gap identification", correct: true },
            { text: "User satisfaction ratings", correct: false },
            { text: "Peak service hours", correct: false }
        ]
    },

    // level 5
   
    {
        level: 5,
        question: "When designing a reference service assessment framework for a multi-branch system, which approach best balances standardization with local needs?",
        options: [
            { text: "Implement identical metrics across all branches", correct: false },
            { text: "Develop core standards while allowing branch-specific supplemental measures", correct: true },
            { text: "Let each branch create its own assessment protocol", correct: false },
            { text: "Rotate assessment focus between branches annually", correct: false }
        ]
    },
    {
        level: 5,
        question: "What is the most critical factor in determining when AI should augment rather than replace human reference services?",
        options: [
            { text: "The complexity of emotional and contextual factors in the query", correct: true },
            { text: "The availability of staff during peak hours", correct: false },
            { text: "The technical infrastructure of the library", correct: false },
            { text: "The demographic profile of users", correct: false }
        ]
    },
    {
        level: 5,
        question: "How should reference services adapt to the growing phenomenon of 'disintermediated' information seeking?",
        options: [
            { text: "Shift focus from answering questions to teaching algorithmic literacy", correct: true },
            { text: "Increase marketing of traditional reference services", correct: false },
            { text: "Limit services to complex research questions only", correct: false },
            { text: "Develop predictive reference chatbots", correct: false }
        ]
    },
    {
        level: 5,
        question: "Which strategy most effectively addresses epistemic injustice in reference services for marginalized communities?",
        options: [
            { text: "Adding diverse materials to collections", correct: false },
            { text: "Training staff to recognize alternative knowledge systems", correct: true },
            { text: "Creating specialized service points", correct: false },
            { text: "Translating resources into multiple languages", correct: false }
        ]
    },
    {
        level: 5,
        question: "When negotiating licenses for reference databases, which provision is most critical for maintaining service quality?",
        options: [
            { text: "Perpetual access clauses for purchased content", correct: true },
            { text: "Discounts on additional products", correct: false },
            { text: "Branding opportunities for the library", correct: false },
            { text: "Training sessions for staff", correct: false }
        ]
    },
    {
        level: 5,
        question: "What is the most significant organizational barrier to implementing a 'reference continuum' model across service points?",
        options: [
            { text: "Siloed departmental budgets and reporting lines", correct: true },
            { text: "Staff resistance to change", correct: false },
            { text: "Technological limitations", correct: false },
            { text: "User expectations", correct: false }
        ]
    },
    {
        level: 5,
        question: "Which metric best demonstrates the value of reference services in supporting institutional strategic goals?",
        options: [
            { text: "Number of reference transactions", correct: false },
            { text: "Alignment with and impact on prioritized learning outcomes", correct: true },
            { text: "User satisfaction scores", correct: false },
            { text: "Cost per reference transaction", correct: false }
        ]
    },
    {
        level: 5,
        question: "How should reference services respond to the increasing prevalence of algorithmically-generated misinformation?",
        options: [
            { text: "Develop critical AI literacy as a core service component", correct: true },
            { text: "Create blacklists of unreliable sources", correct: false },
            { text: "Limit services to vetted resources only", correct: false },
            { text: "Require verification of all user-submitted information", correct: false }
        ]
    },
    {
        level: 5,
        question: "What is the most effective strategy for preserving tacit reference knowledge during generational staff transitions?",
        options: [
            { text: "Creating structured mentoring and narrative documentation systems", correct: true },
            { text: "Recording all reference transactions", correct: false },
            { text: "Standardizing all procedures", correct: false },
            { text: "Hiring consultants to capture institutional knowledge", correct: false }
        ]
    },
    {
        level: 5,
        question: "Which factor is most crucial when designing reference spaces in the post-pandemic environment?",
        options: [
            { text: "Flexibility to accommodate both virtual and physical service modalities", correct: true },
            { text: "Expanding physical collections near service points", correct: false },
            { text: "Increasing the number of public workstations", correct: false },
            { text: "Creating soundproof interview rooms", correct: false }
        ]
    },
    {
        level: 5,
        question: "When developing a reference service model for indigenous communities, which principle should take precedence?",
        options: [
            { text: "Community ownership of knowledge management processes", correct: true },
            { text: "Integration with mainstream library systems", correct: false },
            { text: "Standardization of service protocols", correct: false },
            { text: "Adoption of technological solutions", correct: false }
        ]
    },
    {
        level: 5,
        question: "What is the most significant challenge in maintaining the reference interview's integrity in chatbot interactions?",
        options: [
            { text: "Preserving the iterative, probing nature of the reference interview", correct: true },
            { text: "Technical limitations of natural language processing", correct: false },
            { text: "User expectations for instant answers", correct: false },
            { text: "Integration with existing library systems", correct: false }
        ]
    },
    {
        level: 5,
        question: "Which leadership approach is most effective for transitioning reference staff to advanced service models?",
        options: [
            { text: "Co-creating the vision with frontline staff", correct: true },
            { text: "Implementing changes through administrative mandate", correct: false },
            { text: "Phasing in changes gradually without announcement", correct: false },
            { text: "Hiring new staff with updated skills", correct: false }
        ]
    },
    {
        level: 5,
        question: "How should reference services address the growing 'data divide' between different user populations?",
        options: [
            { text: "Embed data literacy throughout all reference interactions", correct: true },
            { text: "Create separate services for advanced researchers", correct: false },
            { text: "Offer periodic data skills workshops", correct: false },
            { text: "Refer data-intensive queries to specialists", correct: false }
        ]
    },
    {
        level: 5,
        question: "What is the primary consideration when determining the appropriate level of personalization in reference analytics?",
        options: [
            { text: "Balancing service improvement with privacy protection", correct: true },
            { text: "Technical capacity to store user data", correct: false },
            { text: "Potential marketing benefits", correct: false },
            { text: "Staff time required for analysis", correct: false }
        ]
    },
    {
        level: 5,
        question: "Which emerging competency will be most essential for future reference professionals?",
        options: [
            { text: "Strategic knowledge management in hybrid environments", correct: true },
            { text: "Mastery of traditional reference sources", correct: false },
            { text: "Advanced cataloging skills", correct: false },
            { text: "Specialization in a subject discipline", correct: false }
        ]
    },
    {
        level: 5,
        question: "When integrating open educational resources into reference services, what is the most significant challenge?",
        options: [
            { text: "Developing sustainable curation and quality control mechanisms", correct: true },
            { text: "Faculty resistance to non-traditional materials", correct: false },
            { text: "Technological infrastructure requirements", correct: false },
            { text: "User awareness of available resources", correct: false }
        ]
    },
    {
        level: 5,
        question: "What is the most effective strategy for maintaining reference service relevance in an AI-dominated information landscape?",
        options: [
            { text: "Focusing on uniquely human aspects like judgment, context, and ethical guidance", correct: true },
            { text: "Competing with AI on speed and availability", correct: false },
            { text: "Specializing in niche research areas", correct: false },
            { text: "Automating all routine reference functions", correct: false }
        ]
    },
    {
        level: 5,
        question: "Which factor is most critical when redesigning reference services for neurodiverse populations?",
        options: [
            { text: "Implementing multiple communication pathways and flexible interaction modes", correct: true },
            { text: "Training all staff in clinical psychology", correct: false },
            { text: "Creating separate service points", correct: false },
            { text: "Developing specialized collections", correct: false }
        ]
    },
    {
        level: 5,
        question: "How should reference services address the challenge of 'information privilege' in academic settings?",
        options: [
            { text: "Embedding information literacy across the curriculum", correct: false },
            { text: "Systematically identifying and bridging gaps in information access", correct: true },
            { text: "Creating tiered service levels based on user status", correct: false },
            { text: "Focusing on high-impact researchers only", correct: false }
        ]
    },


    // level 6
    {
        level: 6,
        question: "How can libraries ethically balance user confidentiality with service analytics in a data-driven environment?",
        options: [
            { text: "Use anonymized data and obtain informed user consent for analytics", correct: true },
            { text: "Store all user interactions indefinitely for future evaluation", correct: false },
            { text: "Allow IT departments unrestricted access to user records", correct: false },
            { text: "Restrict analytics to only in-person interactions", correct: false }
        ]
    },
    {
        level: 6,
        question: "Which approach best aligns with the principle of individualization in reference services?",
        options: [
            { text: "Designing interactions based on user’s context, experience, and academic level", correct: true },
            { text: "Creating a uniform FAQ page for all inquiries", correct: false },
            { text: "Prioritizing speed over depth in responses", correct: false },
            { text: "Limiting assistance to users with institutional affiliation", correct: false }
        ]
    },
    {
        level: 6,
        question: "What should be the primary goal of reference instruction sessions for postgraduate students?",
        options: [
            { text: "Fostering independent research through advanced database navigation and critical evaluation", correct: true },
            { text: "Providing one-time answers to specific queries", correct: false },
            { text: "Demonstrating library catalog use only", correct: false },
            { text: "Promoting the library’s physical resources exclusively", correct: false }
        ]
    },
    {
        level: 6,
        question: "In virtual reference environments, what best improves equitable access?",
        options: [
            { text: "Ensuring compatibility with screen readers and mobile devices", correct: true },
            { text: "Providing services only during office hours", correct: false },
            { text: "Requiring users to register before asking questions", correct: false },
            { text: "Using standardized templates for all queries", correct: false }
        ]
    },
    {
        level: 6,
        question: "Which action most directly supports the principle of continuous improvement in reference services?",
        options: [
            { text: "Conducting periodic user satisfaction surveys and using results for staff development", correct: true },
            { text: "Maintaining static service policies to avoid confusion", correct: false },
            { text: "Focusing evaluation on quantity of inquiries", correct: false },
            { text: "Avoiding user feedback to reduce bias", correct: false }
        ]
    },
    {
        level: 6,
        question: "What is the best method to evaluate the effectiveness of virtual reference services?",
        options: [
            { text: "Analyzing completion rates, user feedback, and session logs", correct: true },
            { text: "Counting the number of emails answered daily", correct: false },
            { text: "Using staff feedback only", correct: false },
            { text: "Recording video sessions for internal review", correct: false }
        ]
    },
    {
        level: 6,
        question: "Which of the following best applies the concept of authority and expertise in reference work?",
        options: [
            { text: "Demonstrating subject expertise while guiding users to credible resources", correct: true },
            { text: "Limiting help to general questions", correct: false },
            { text: "Avoiding difficult topics to save time", correct: false },
            { text: "Delegating all advanced queries to IT staff", correct: false }
        ]
    },
    {
        level: 6,
        question: "How can libraries incorporate intellectual freedom into reference services on sensitive topics?",
        options: [
            { text: "Providing access to multiple perspectives while maintaining neutrality", correct: true },
            { text: "Directing users to government-approved content only", correct: false },
            { text: "Avoiding politically sensitive topics entirely", correct: false },
            { text: "Limiting access to controversial sources", correct: false }
        ]
    },
    {
        level: 6,
        question: "What strategy ensures instructional value in a digital reference interaction?",
        options: [
            { text: "Incorporating teachable moments like showing how to search databases", correct: true },
            { text: "Simply giving direct answers", correct: false },
            { text: "Referring all users to printed guides", correct: false },
            { text: "Avoiding explanations to reduce interaction time", correct: false }
        ]
    },
    {
        level: 6,
        question: "Which measure helps ensure access and accessibility in online reference systems?",
        options: [
            { text: "Compliance with WCAG standards for web platforms", correct: true },
            { text: "Mobile-only platforms for reduced bandwidth", correct: false },
            { text: "Chat-based services with no transcription", correct: false },
            { text: "Text-only resources to reduce complexity", correct: false }
        ]
    },
    {
        level: 6,
        question: "How should a library measure the success of a community-based reference program?",
        options: [
            { text: "Level of engagement, user testimonials, and behavioral outcomes", correct: true },
            { text: "Amount of funding received", correct: false },
            { text: "Number of reference librarians involved", correct: false },
            { text: "Length of service hours", correct: false }
        ]
    },
    {
        level: 6,
        question: "What ensures ethical delivery of reference services in high-surveillance environments?",
        options: [
            { text: "Providing secure platforms and informing users of data policies", correct: true },
            { text: "Logging all chats for institutional review", correct: false },
            { text: "Recording user demographics automatically", correct: false },
            { text: "Asking for identification before answering queries", correct: false }
        ]
    },
    {
        level: 6,
        question: "Which principle should guide triage during peak reference hours?",
        options: [
            { text: "Prioritize based on urgency and complexity", correct: true },
            { text: "Assist users alphabetically", correct: false },
            { text: "Limit sessions to 5 minutes", correct: false },
            { text: "Serve students only", correct: false }
        ]
    },
    {
        level: 6,
        question: "Which of the following best promotes accuracy in reference responses?",
        options: [
            { text: "Verifying data through multiple authoritative sources", correct: true },
            { text: "Responding from memory to save time", correct: false },
            { text: "Copy-pasting from internet searches", correct: false },
            { text: "Avoiding technical questions", correct: false }
        ]
    },
    {
        level: 6,
        question: "What distinguishes 'instructional' from 'transactional' reference service?",
        options: [
            { text: "Instructional helps build user skills, transactional gives quick answers", correct: true },
            { text: "Transactional is for experts only", correct: false },
            { text: "Instructional takes place only in classrooms", correct: false },
            { text: "Transactional involves group sessions", correct: false }
        ]
    },
    {
        level: 6,
        question: "Which practice best upholds professional ethics in online reference interactions?",
        options: [
            { text: "Respecting user privacy and maintaining confidentiality throughout the session", correct: true },
            { text: "Saving chat logs for indefinite future use", correct: false },
            { text: "Sharing user questions with marketing teams", correct: false },
            { text: "Asking for user phone numbers to follow up", correct: false }
        ]
    },
    {
        level: 6,
        question: "Which tool is most effective for continuous reference service improvement?",
        options: [
            { text: "User feedback forms combined with trend analysis", correct: true },
            { text: "Monthly memos from library management", correct: false },
            { text: "Random staff observations", correct: false },
            { text: "Increasing signage around help desks", correct: false }
        ]
    },
    {
        level: 6,
        question: "Which type of inquiry is most appropriate for asynchronous reference?",
        options: [
            { text: "In-depth research questions that require considered responses", correct: true },
            { text: "Urgent directional queries", correct: false },
            { text: "Emergency academic requests", correct: false },
            { text: "Real-time troubleshooting", correct: false }
        ]
    },
    {
        level: 6,
        question: "How can libraries improve user engagement in underutilized reference services?",
        options: [
            { text: "Conduct needs assessments and rebrand with user-relevant language", correct: true },
            { text: "Limit access to frequent users", correct: false },
            { text: "Reduce service hours", correct: false },
            { text: "Force login before every inquiry", correct: false }
        ]
    },
    {
        level: 6,
        question: "What distinguishes an ethical librarian response in politically sensitive queries?",
        options: [
            { text: "Presenting multiple credible perspectives without inserting personal bias", correct: true },
            { text: "Referring the user to the government website only", correct: false },
            { text: "Avoiding the question entirely", correct: false },
            { text: "Telling the user their opinion is incorrect", correct: false }
        ]
    },


    // level 7
    {
        level: 7,
        question: "What strategic approach should a national library adopt to ensure inclusive reference services for neurodiverse and rural populations?",
        options: [
            { text: "Implement a multi-modal service model with universal design principles and mobile outreach", correct: true },
            { text: "Centralize services in urban branches only", correct: false },
            { text: "Offer the same online services to all users regardless of context", correct: false },
            { text: "Assign services for special groups to external consultants", correct: false }
        ]
    },
    {
        level: 7,
        question: "When building an AI-integrated reference system, what is the most effective method to preserve human ethical judgment?",
        options: [
            { text: "Include human oversight loops for complex or sensitive queries", correct: true },
            { text: "Program the AI to follow strict keyword matching", correct: false },
            { text: "Use only pre-approved sources without librarian involvement", correct: false },
            { text: "Let the AI automatically escalate queries to senior management", correct: false }
        ]
    },
    {
        level: 7,
        question: "Which policy best ensures intellectual freedom while addressing disinformation in reference services?",
        options: [
            { text: "Provide critical evaluation tools and maintain access to diverse perspectives", correct: true },
            { text: "Ban all controversial content", correct: false },
            { text: "Direct users to pre-filtered answers only", correct: false },
            { text: "Allow only government-verified content in responses", correct: false }
        ]
    },
    {
        level: 7,
        question: "In a globally networked virtual reference service, what strategy would best manage cultural and linguistic diversity?",
        options: [
            { text: "Employ multilingual, culturally trained staff and region-specific protocols", correct: true },
            { text: "Use only English and direct all users to translations", correct: false },
            { text: "Design a universal script for all responses", correct: false },
            { text: "Limit services to homogenous user groups", correct: false }
        ]
    },
    {
        level: 7,
        question: "How can a reference department demonstrate its impact in a strategic planning meeting with university leadership?",
        options: [
            { text: "Present data linking reference interventions to student learning outcomes and retention", correct: true },
            { text: "Showcase the number of books issued", correct: false },
            { text: "Highlight daily opening hours", correct: false },
            { text: "Display user satisfaction with physical space", correct: false }
        ]
    },
    {
        level: 7,
        question: "Which leadership strategy best drives innovation in a reference service team facing declining use?",
        options: [
            { text: "Co-developing a transformation roadmap with staff input and community engagement", correct: true },
            { text: "Mandating extended service hours", correct: false },
            { text: "Reducing staff and redistributing responsibilities", correct: false },
            { text: "Focusing only on traditional services to maintain stability", correct: false }
        ]
    },
    {
        level: 7,
        question: "Which of the following would be most effective for sustaining quality in decentralized reference models?",
        options: [
            { text: "Establishing shared standards with room for local customization", correct: true },
            { text: "Requiring all branches to adopt identical workflows", correct: false },
            { text: "Delegating all decision-making to central management", correct: false },
            { text: "Focusing only on print reference tools", correct: false }
        ]
    },
    {
        level: 7,
        question: "What innovation would most enhance the strategic relevance of reference services in research-intensive institutions?",
        options: [
            { text: "Embedding research librarians in faculty teams for proactive collaboration", correct: true },
            { text: "Hosting weekly drop-in help sessions", correct: false },
            { text: "Maintaining a printed subject guide archive", correct: false },
            { text: "Limiting support to graduate students", correct: false }
        ]
    },
    {
        level: 7,
        question: "When integrating reference services with data literacy programs, what outcome should be prioritized?",
        options: [
            { text: "Enabling users to interpret and use data critically in decision-making", correct: true },
            { text: "Increasing data source subscriptions", correct: false },
            { text: "Developing pre-recorded tutorials only", correct: false },
            { text: "Focusing only on statistical databases", correct: false }
        ]
    },
    {
        level: 7,
        question: "How can libraries protect marginalized users from algorithmic bias in AI-assisted reference systems?",
        options: [
            { text: "Audit AI systems regularly and ensure transparency in algorithm design", correct: true },
            { text: "Restrict AI access to only mainstream topics", correct: false },
            { text: "Avoid serving high-risk populations", correct: false },
            { text: "Use AI systems developed only by government agencies", correct: false }
        ]
    },
    {
        level: 7,
        question: "What long-term strategy helps ensure continuity of quality during staff turnover in reference services?",
        options: [
            { text: "Codifying institutional knowledge and mentorship-based succession planning", correct: true },
            { text: "Outsourcing services to third-party providers", correct: false },
            { text: "Relying solely on online training modules", correct: false },
            { text: "Hiring only recent graduates", correct: false }
        ]
    },
    {
        level: 7,
        question: "What is the most effective policy for aligning reference services with national information literacy goals?",
        options: [
            { text: "Embedding reference services into formal education and civic institutions", correct: true },
            { text: "Limiting reference services to academic libraries", correct: false },
            { text: "Focusing on elite users", correct: false },
            { text: "Avoiding engagement with curriculum planning bodies", correct: false }
        ]
    },
    {
        level: 7,
        question: "What metric would best demonstrate the societal value of public library reference services?",
        options: [
            { text: "Impact on community knowledge, empowerment, and decision-making", correct: true },
            { text: "Number of shelves filled", correct: false },
            { text: "Internet speed in the library", correct: false },
            { text: "Duration of opening hours", correct: false }
        ]
    },
    {
        level: 7,
        question: "Which proactive reference model can best serve communities with low information literacy?",
        options: [
            { text: "Outreach services combined with embedded literacy education", correct: true },
            { text: "Passive online forms with no librarian involvement", correct: false },
            { text: "Exclusive use of digital-only resources", correct: false },
            { text: "Fee-based personal librarian models", correct: false }
        ]
    },
    {
        level: 7,
        question: "In a multi-language society, what strategic element is essential for inclusive reference service?",
        options: [
            { text: "Linguistically diverse staff and materials in users’ native languages", correct: true },
            { text: "English-only policies", correct: false },
            { text: "Outsourcing translation to users", correct: false },
            { text: "Offering language support once a week", correct: false }
        ]
    },
    {
        level: 7,
        question: "How should reference services support lifelong learning in rapidly changing information environments?",
        options: [
            { text: "Offer scalable and self-directed learning opportunities integrated into services", correct: true },
            { text: "Focus only on school-aged learners", correct: false },
            { text: "Maintain static information displays", correct: false },
            { text: "Discourage self-service technologies", correct: false }
        ]
    },
    {
        level: 7,
        question: "What reference policy best supports open knowledge movements in academia?",
        options: [
            { text: "Integrating open educational resources and open access platforms into services", correct: true },
            { text: "Restricting content to licensed databases only", correct: false },
            { text: "Avoiding non-peer-reviewed materials", correct: false },
            { text: "Limiting content based on faculty preference", correct: false }
        ]
    },
    {
        level: 7,
        question: "What would be the most strategic response to political pressure on library reference content?",
        options: [
            { text: "Reaffirm institutional values of neutrality and intellectual freedom", correct: true },
            { text: "Censor materials based on political preference", correct: false },
            { text: "Restrict librarian access to certain topics", correct: false },
            { text: "Follow donor preferences over policy", correct: false }
        ]
    },
    {
        level: 7,
        question: "Which cross-sector partnership can enhance reference service impact at national level?",
        options: [
            { text: "Collaborating with health, education, and civic bodies for integrated information access", correct: true },
            { text: "Limiting partnerships to academic publishers", correct: false },
            { text: "Working only with tech startups", correct: false },
            { text: "Contracting exclusively with municipal government", correct: false }
        ]
    },
    {
        level: 7,
        question: "What key feature defines a 'transformative' reference service model?",
        options: [
            { text: "Engaging users as co-creators of information solutions and policies", correct: true },
            { text: "Using AI chatbots for all transactions", correct: false },
            { text: "Focusing strictly on fast query resolution", correct: false },
            { text: "Outsourcing reference interviews", correct: false }
        ]
    }


    // Each level would have 20 questions
];

// Note: In a complete implementation, there would be 140 questions (20 per level x 7 levels)
// The questions would increase in difficulty with each level, covering more specific
// aspects of wildlife utilization, conservation strategies, biodiversity measurements,
// international conventions, and case studies from the provided course materials.