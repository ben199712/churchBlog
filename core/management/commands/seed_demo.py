from django.core.management.base import BaseCommand
from django.utils import timezone
from core.models import BannerSection, Service, Event, Testimonial, Pastor, ChurchInfo
from blog.models import Category, BlogPost
from donations.models import DonationType, DonationGoal, Donation
from quiz.models import QuizCategory, Quiz, Question, Answer


class Command(BaseCommand):
    help = "Seed demo content for the church website"

    def handle(self, *args, **options):
        self.stdout.write("Seeding demo data...")

        # Core
        BannerSection.objects.all().delete()
        Service.objects.all().delete()
        Event.objects.all().delete()
        Testimonial.objects.all().delete()
        Pastor.objects.all().delete()
        ChurchInfo.objects.all().delete()

        BannerSection.objects.create(
            title="Welcome to Grace Seventh-day Adventist Church",
            subtitle="Join us in worship, fellowship, and spiritual growth.",
            image="",
        )
        BannerSection.objects.create(
            title="Experience God's Love Together",
            subtitle="Discover the joy of Christian fellowship.",
            image="",
        )
        BannerSection.objects.create(
            title="Grow in Faith and Knowledge",
            subtitle="Deepen your understanding of God's word.",
            image="",
        )

        Service.objects.create(title="Sabbath Service", subtitle="Saturdays at 9:30 AM", description="Weekly Sabbath worship service.", icon="fas fa-calendar-alt")
        Service.objects.create(title="Bible Study", subtitle="Wednesdays at 7:00 PM", description="Weekly Bible study sessions.", icon="fas fa-users")
        Service.objects.create(title="Prayer Meeting", subtitle="Fridays at 7:30 PM", description="Prayer and fellowship.", icon="fas fa-heart")

        today = timezone.now().date()
        Event.objects.create(title="Community Concert", description="Special celebration with music and fellowship.", date=today, time="7:00 PM", day="15", month="Dec")
        Event.objects.create(title="Youth Retreat", description="A weekend of spiritual growth.", date=today, time="All Weekend", day="22", month="Dec")
        Event.objects.create(title="New Year Prayer Service", description="Start the new year with prayer.", date=today, time="6:00 PM", day="29", month="Dec")

        Testimonial.objects.create(name="Sarah Mitchell", message="My spiritual life has deepened significantly.", image="", since="2019")
        Testimonial.objects.create(name="David Martinez", message="The youth ministry has been a blessing.", image="", since="2018")
        Testimonial.objects.create(name="Lisa Chen", message="Outreach programs helped me serve others.", image="", since="2020")

        Pastor.objects.create(name="Robert Johnson", title="Senior Pastor", bio="Dedicated servant of God with over 15 years of ministry.", image="")

        ChurchInfo.objects.create(
            email="info@gracesdachurch.org",
            phone="(555) 123-4567",
            address="123 Faith Street, Hope City, HC 12345",
            motto="Establishing God's kingdom on earth.",
            linked_link="https://linkedin.com",
            facebook_link="https://facebook.com",
            twitter_link="https://twitter.com",
            instagram_link="https://instagram.com",
        )

        # Blog
        Category.objects.all().delete()
        BlogPost.objects.all().delete()
        cat_news = Category.objects.create(name="Church News")
        cat_spiritual = Category.objects.create(name="Spiritual Insights")
        cat_ann = Category.objects.create(name="Announcements")

        BlogPost.objects.create(title="The Power of Sabbath Rest", content="Discover how observing the Sabbath can bring peace and renewal.", author="Pastor Robert", category=cat_spiritual, featured=True)
        BlogPost.objects.create(title="Upcoming Youth Retreat", content="Join our youth for an inspiring weekend retreat.", author="Church Admin", category=cat_news)
        BlogPost.objects.create(title="Community Outreach", content="Serving our neighborhood with love and compassion.", author="Missions Team", category=cat_ann)

        # Donations
        DonationType.objects.all().delete()
        DonationGoal.objects.all().delete()
        Donation.objects.all().delete()
        tithe = DonationType.objects.create(name="Tithe")
        offering = DonationType.objects.create(name="Offering")
        special = DonationType.objects.create(name="Special")

        goal = DonationGoal.objects.create(title="Building Fund", description="Support our new sanctuary.", target_amount=50000, current_amount=10000)

        Donation.objects.create(donor_name="Anonymous", donor_email="anon@example.com", amount=100, donation_type=tithe, goal=goal, payment_method="cash", status="completed")
        Donation.objects.create(donor_name="Jane Doe", donor_email="jane@example.com", amount=50, donation_type=offering, payment_method="bank", status="completed")

        # Quiz
        QuizCategory.objects.all().delete()
        Quiz.objects.all().delete()
        Question.objects.all().delete()
        Answer.objects.all().delete()

        # Create multiple quiz categories and ~40 demo Q&A across quizzes
        categories = [
            ("Bible Basics", "easy"),
            ("SDA Doctrine", "medium"),
            ("Bible Prophecy", "hard"),
            ("Health & Wellness", "medium"),
        ]

        qa_bank = {
            "Bible Basics": [
                ("Who built the ark?", [("Noah", True), ("Moses", False), ("Abraham", False), ("David", False)]),
                ("Who was swallowed by a great fish?", [("Jonah", True), ("Peter", False), ("Paul", False), ("Elijah", False)]),
                ("In the beginning, God created the ___ and the earth.", [("heavens", True), ("stars", False), ("animals", False), ("temple", False)]),
                ("Who led Israel out of Egypt?", [("Moses", True), ("Joshua", False), ("Aaron", False), ("Caleb", False)]),
                ("Where was Jesus born?", [("Bethlehem", True), ("Nazareth", False), ("Jerusalem", False), ("Capernaum", False)]),
                ("How many days did God take to create the world?", [("Six", True), ("Seven", False), ("Five", False), ("Eight", False)]),
                ("Who killed Goliath?", [("David", True), ("Saul", False), ("Samuel", False), ("Jonathan", False)]),
                ("Who was the first man?", [("Adam", True), ("Noah", False), ("Seth", False), ("Enoch", False)]),
                ("What was the first miracle of Jesus recorded in John?", [("Turned water into wine", True), ("Fed 5000", False), ("Healed a leper", False), ("Walked on water", False)]),
                ("Who betrayed Jesus?", [("Judas Iscariot", True), ("Peter", False), ("Thomas", False), ("John", False)]),
            ],
            "SDA Doctrine": [
                ("Which day is the Sabbath according to the fourth commandment?", [("Seventh day", True), ("First day", False), ("Any day", False), ("Sixth day", False)]),
                ("What happens at death according to Adventist belief?", [("Unconscious sleep", True), ("Immediate heaven/hell", False), ("Reincarnation", False), ("Ghost life", False)]),
                ("What marks the beginning of the investigative judgment?", [("1844", True), ("1798", False), ("538", False), ("70 AD", False)]),
                ("The Second Coming will be...", [("Visible and literal", True), ("Secret rapture", False), ("Spiritual only", False), ("Symbolic", False)]),
                ("Who is the remnant described in Revelation 12:17?", [("Keep commandments and have faith of Jesus", True), ("Any church", False), ("Israel only", False), ("Angels", False)]),
                ("What is the Spirit of Prophecy in Rev 19:10?", [("Testimony of Jesus", True), ("Angelic messages", False), ("OT law", False), ("Human philosophy", False)]),
                ("Adventist health message encourages...", [("Plant-forward lifestyle", True), ("Gluttony", False), ("Alcohol use", False), ("Tobacco", False)]),
                ("What is baptism a symbol of?", [("Death and resurrection with Christ", True), ("Joining a club", False), ("Legal requirement", False), ("Cleansing by water only", False)]),
                ("The Three Angels' Messages are found in", [("Revelation 14", True), ("Matthew 24", False), ("Genesis 1", False), ("Acts 2", False)]),
                ("Sabbath begins and ends at", [("Sunset to sunset", True), ("Midnight to midnight", False), ("Sunrise to sunrise", False), ("Noon to noon", False)]),
            ],
            "Bible Prophecy": [
                ("What beasts represent kingdoms in Daniel 7?", [("Lion, Bear, Leopard, Terrible Beast", True), ("Eagle, Ox, Man, Lion", False), ("Horsemen", False), ("Locusts", False)]),
                ("The little horn power uproots how many horns?", [("Three", True), ("One", False), ("Ten", False), ("Seven", False)]),
                ("The 2300 evenings and mornings prophecy points to", [("Cleansing of the sanctuary", True), ("Creation week", False), ("Flood", False), ("Exodus", False)]),
                ("Revelation's sea beast receives a deadly wound and it is", [("Healed", True), ("Permanent", False), ("Ignored", False), ("Unknown", False)]),
                ("What does a day represent in prophetic time?", [("A year", True), ("A week", False), ("A month", False), ("A literal day", False)]),
                ("What color is the horse representing famine in Rev 6?", [("Black", True), ("Red", False), ("White", False), ("Pale", False)]),
                ("Who is the dragon in Revelation 12?", [("Satan", True), ("Rome", False), ("Beast", False), ("False prophet", False)]),
                ("The mark of the beast relates to", [("Worship and authority", True), ("A microchip only", False), ("A barcode", False), ("Currency", False)]),
                ("How many horns on the earth beast of Rev 13?", [("Two", True), ("Ten", False), ("Seven", False), ("One", False)]),
                ("Where is the seal of God placed?", [("Forehead", True), ("Hand", False), ("Arm", False), ("Chest", False)]),
            ],
            "Health & Wellness": [
                ("Which foods were clean in Leviticus 11?", [("Animals that chew cud and have split hooves", True), ("All seafood", False), ("All birds", False), ("All meats", False)]),
                ("Daniel and friends chose a diet of", [("Vegetables and water", True), ("Wine and meat", False), ("Bread only", False), ("Sweets", False)]),
                ("The body is the", [("Temple of the Holy Spirit", True), ("Owner's property", False), ("Irrelevant", False), ("Only physical", False)]),
                ("Rest is exemplified by", [("Sabbath", True), ("Constant work", False), ("Night parties", False), ("No sleep", False)]),
                ("Best beverage for health", [("Water", True), ("Alcohol", False), ("Sugary soda", False), ("Energy drinks", False)]),
                ("Which habit is discouraged?", [("Tobacco", True), ("Exercise", False), ("Temperance", False), ("Sunshine", False)]),
                ("Principle of NEWSTART includes", [("Nutrition, Exercise, Water, Sunlight, Temperance, Air, Rest, Trust", True), ("Only diet", False), ("Only sleep", False), ("Only meds", False)]),
                ("God's ideal for health includes", [("Wholeness of body, mind, spirit", True), ("Only body", False), ("Only spirit", False), ("Only mind", False)]),
                ("What did manna teach Israel?", [("Dependence on God", True), ("Luxury eating", False), ("Fasting always", False), ("Diet fads", False)]),
                ("What did Paul say about the body in Romans 12?", [("Living sacrifice", True), ("Worthless", False), ("Just flesh", False), ("Temporary shell only", False)]),
            ],
        }

        # Create categories, multiple quizzes per category, and populate questions
        total_quizzes = 0
        total_questions = 0
        for cat_name, difficulty in categories:
            cat = QuizCategory.objects.create(name=cat_name)
            # Create ~12 quizzes per category to reach ~48 quizzes total
            for i in range(1, 13):
                quiz = Quiz.objects.create(
                    title=f"{cat_name} Quiz {i}",
                    category=cat,
                    difficulty=difficulty,
                    time_limit=10,
                )
                total_quizzes += 1
                # Pick 3-4 questions from the bank (cycled) for each quiz
                bank = qa_bank[cat_name]
                for j in range(3):
                    q_index = (i + j) % len(bank)
                    q_text, answers = bank[q_index]
                    q = Question.objects.create(quiz=quiz, question_text=q_text, explanation="")
                    for ans_text, is_correct in answers:
                        Answer.objects.create(question=q, answer_text=ans_text, is_correct=is_correct)
                    total_questions += 1

        self.stdout.write(self.style.SUCCESS(
            f"Created {total_quizzes} quizzes with ~{total_questions} questions across categories."
        ))

        self.stdout.write(self.style.SUCCESS("Demo data seeded successfully."))


