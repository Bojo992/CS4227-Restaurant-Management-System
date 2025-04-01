package cs4337.restaurant.microservices.menu;

import com.tngtech.archunit.junit.AnalyzeClasses;
import com.tngtech.archunit.junit.ArchTest;
import com.tngtech.archunit.lang.ArchRule;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

@AnalyzeClasses(packages = "cs4337.restaurant.microservices.menu")
public class LayeredArchitectureTest {

    @ArchTest
    static final ArchRule noControllerAccessToRepository = noClasses()
            .that().resideInAPackage("..controller..")
            .should().accessClassesThat().resideInAPackage("..repository..");
}
